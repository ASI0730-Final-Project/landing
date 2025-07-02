const authModal = document.getElementById("authModal");
const toggleForm = document.getElementById("toggleForm");
const authAction = document.getElementById("authAction");
const formTitle = document.getElementById("formTitle");
const mainContent = document.getElementById("mainContent");
const notification = document.getElementById("notification");

let isLogin = false;
let userDatabase = [];

// Mapa de búsqueda: término => ID de sección
const sectionMap = {
  gigu: "GigU",
  otraseccion: "OtraSeccion",
  tecnologia: "Tecnologia",
  contacto: "contactSection",
  inicio: "homeSection",
};

function showMessage(message, color = "#d4edda") {
  notification.textContent = message;
  notification.style.backgroundColor = color;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

toggleForm.addEventListener("click", () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Iniciar Sesión" : "Registrarse";
  authAction.textContent = isLogin ? "Entrar" : "Crear Cuenta";
  document.getElementById("username").style.display = isLogin
    ? "none"
    : "block";
});

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
      showMessage(
        `¡Bienvenido, ${user.username || email}! Redirigiendo...`,
        "#d1ecf1"
      );
      setTimeout(() => {
        authModal.classList.remove("active");
        authModal.style.display = "none";
        mainContent.style.display = "block";
      }, 1500);
    } else {
      showMessage("Credenciales incorrectas", "#f8d7da");
    }
  } else {
    if (userDatabase.some((u) => u.email === email)) {
      showMessage("Este correo ya está registrado", "#f8d7da");
      return;
    }

    userDatabase.push({ username, email, password });
    showMessage("Registro exitoso. Ahora inicia sesión", "#cce5ff");
    toggleForm.click();
  }
});

// ------------------ BÚSQUEDA CON RESALTADO + REDIRECCIÓN ------------------

function removeHighlights() {
  const highlights = document.querySelectorAll("span.highlight");
  highlights.forEach((span) => {
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
    for (let i = 0; i < node.childNodes.length; i++) {
      highlightMatches(node.childNodes[i], query);
    }
  }
}

function scrollToSectionFromSearch(query) {
  const lowered = query.toLowerCase();
  for (const [key, sectionId] of Object.entries(sectionMap)) {
    if (key.toLowerCase().includes(lowered)) {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        window.location.hash = sectionId;

        // Destacar visualmente (opcional)
        target.classList.add("highlight");
        setTimeout(() => {
          target.classList.remove("highlight");
        }, 1000);

        return true;
      }
    }
  }
  return false;
}

// Búsqueda mientras escribe
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim();
  removeHighlights();

  if (query !== "") {
    highlightMatches(document.body, query);
  }
});

// Búsqueda con Enter + redirección a sección
document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const query = this.value.trim();
      if (query !== "") {
        removeHighlights();
        highlightMatches(document.body, query);

        const success = scrollToSectionFromSearch(query);
        if (!success) {
          alert("No se encontró ninguna sección relacionada con: " + query);
        }
      }
    }
  });
