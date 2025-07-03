function abrirAuthModal() {
  document.getElementById("authModal").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  const authModal = document.getElementById("authModal");
  const toggleForm = document.getElementById("toggleForm");
  const authAction = document.getElementById("authAction");
  const formTitle = document.getElementById("formTitle");
  const mainContent = document.getElementById("mainContent");
  const notification = document.getElementById("notification");

  const loginBtn = document.querySelector(
    'nav .button[onclick="abrirAuthModal()"]'
  );

  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Cerrar sesión";
  logoutBtn.classList.add("button");
  logoutBtn.style.marginLeft = "12px";
  logoutBtn.style.display = "none";
  logoutBtn.onclick = cerrarSesion;
  document.querySelector("nav").appendChild(logoutBtn);

  let isLogin = true;
  let userDatabase = JSON.parse(localStorage.getItem("users")) || [];

  // Mostrar mensaje flotante
  function showMessage(message, color = "#d4edda") {
    notification.textContent = message;
    notification.style.backgroundColor = color;
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }

  // Alternar entre login y registro
  toggleForm.addEventListener("click", () => {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? "Iniciar Sesión" : "Registrarse";
    authAction.textContent = isLogin ? "Entrar" : "Crear Cuenta";
    document.getElementById("username").style.display = isLogin
      ? "none"
      : "block";
    toggleForm.textContent = isLogin ? "Crear una" : "Iniciar sesión";
  });

  // Acción principal (login o registro)
  authAction.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password || (!isLogin && !username)) {
      showMessage("Completa todos los campos", "#f8d7da");
      return;
    }

    if (isLogin) {
      const user = userDatabase.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        showMessage(
          `¡Bienvenido, ${user.username || email}! Redirigiendo...`,
          "#d1ecf1"
        );
        setTimeout(() => {
          authModal.style.display = "none";
          mainContent.style.display = "block";
          logoutBtn.style.display = "inline-block";
          loginBtn.style.display = "none";
        }, 1000);
      } else {
        showMessage("Credenciales incorrectas", "#f8d7da");
      }
    } else {
      if (userDatabase.some((u) => u.email === email)) {
        showMessage("Este correo ya está registrado", "#f8d7da");
        return;
      }

      const newUser = { username, email, password };
      userDatabase.push(newUser);
      localStorage.setItem("users", JSON.stringify(userDatabase));
      showMessage("Registro exitoso. Ahora inicia sesión", "#cce5ff");
      toggleForm.click();
    }
  });

  // Cerrar sesión
  function cerrarSesion() {
    localStorage.removeItem("loggedInUser");
    showMessage("Sesión cerrada", "#f8d7da");
    setTimeout(() => {
      mainContent.style.display = "block";
      authModal.style.display = "none";
      logoutBtn.style.display = "none";
      loginBtn.style.display = "inline-block";
    }, 1000);
  }

  // Mostrar contenido principal si ya está logueado
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedUser) {
    authModal.style.display = "none";
    mainContent.style.display = "block";
    logoutBtn.style.display = "inline-block";
    loginBtn.style.display = "none";
  } else {
    authModal.style.display = "none";
    mainContent.style.display = "block";
    logoutBtn.style.display = "none";
    loginBtn.style.display = "inline-block";
  }

  // --------- BUSCADOR ---------
  const sectionMap = {
    nosotros: "nosotros",
    servicios: "servicios",
    clientes: "clientes",
    contacto: "contacto",
  };

  function removeHighlights() {
    document.querySelectorAll("span.highlight").forEach((span) => {
      const parent = span.parentNode;
      parent.replaceChild(document.createTextNode(span.textContent), span);
      parent.normalize();
    });
  }

  function highlightMatches(node, query) {
    if (node.nodeType === 3) {
      const text = node.textContent;
      const regex = new RegExp(`\\b${query}\\b`, "gi");
      if (regex.test(text)) {
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;
        let match;
        while ((match = regex.exec(text)) !== null) {
          const beforeMatch = text.slice(lastIndex, match.index);
          const matchedText = match[0];
          fragment.appendChild(document.createTextNode(beforeMatch));
          const span = document.createElement("span");
          span.className = "highlight";
          span.textContent = matchedText;
          fragment.appendChild(span);
          lastIndex = regex.lastIndex;
        }
        const afterMatch = text.slice(lastIndex);
        fragment.appendChild(document.createTextNode(afterMatch));
        node.replaceWith(fragment);
      }
    } else if (
      node.nodeType === 1 &&
      node.childNodes &&
      !["SCRIPT", "STYLE"].includes(node.tagName)
    ) {
      node.childNodes.forEach((child) => highlightMatches(child, query));
    }
  }

  document
    .getElementById("searchInput")
    ?.addEventListener("input", function () {
      const query = this.value.trim();
      removeHighlights();
      if (query !== "") highlightMatches(document.body, query);
    });

  document
    .getElementById("searchInput")
    ?.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const query = this.value.trim().toLowerCase();
        if (query !== "") {
          removeHighlights();
          highlightMatches(document.body, query);
          for (const [key, sectionId] of Object.entries(sectionMap)) {
            if (key.includes(query)) {
              const target = document.getElementById(sectionId);
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "center" });
                target.classList.add("highlight");
                setTimeout(() => target.classList.remove("highlight"), 1000);
                break;
              }
            }
          }
        }
      }
    });
});
