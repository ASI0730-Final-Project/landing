const authModal = document.getElementById("authModal");
const toggleForm = document.getElementById("toggleForm");
const authAction = document.getElementById("authAction");
const formTitle = document.getElementById("formTitle");
const mainContent = document.getElementById("mainContent");
const notification = document.getElementById("notification");

let isLogin = false;
let userDatabase = [];

// Variables para las coincidencias y el índice de coincidencia actual
let matches = [];
let currentMatchIndex = -1;

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
    toggleForm.click(); // Cambia a modo login automáticamente
  }
});

// ----------- BÚSQUEDA INTELIGENTE CON RESALTADO -------------
// Función para eliminar los resaltados anteriores
function removeHighlights() {
  const highlights = document.querySelectorAll("span.highlight");
  highlights.forEach((span) => {
    const parent = span.parentNode;
    parent.replaceChild(document.createTextNode(span.textContent), span);
    parent.normalize(); // Junta nodos de texto adyacentes
  });
}

// Función para resaltar palabras completas que coincidan con la búsqueda
function highlightMatches(node, query) {
  if (node.nodeType === 3) {
    // Si el nodo es un nodo de texto
    const text = node.textContent;
    const regex = new RegExp(`\\b${query}\\b`, "gi"); // Buscar palabra completa

    // Evitar hacer múltiples operaciones dentro de un mismo nodo
    if (regex.test(text)) {
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      let match;
      let afterMatch = ""; // Definir después de la coincidencia

      // Encontrar las coincidencias y resaltarlas
      while ((match = regex.exec(text)) !== null) {
        const beforeMatch = text.slice(lastIndex, match.index);
        const matchedText = match[0];
        afterMatch = text.slice(regex.lastIndex); // Actualizar después del match

        // Crear un nodo de texto para la parte anterior al match
        fragment.appendChild(document.createTextNode(beforeMatch));

        // Crear un nodo para el match y resaltarlo
        const span = document.createElement("span");
        span.className = "highlight";
        span.textContent = matchedText;
        fragment.appendChild(span);

        lastIndex = regex.lastIndex;
      }

      // Añadir la parte posterior del texto que no coincide
      fragment.appendChild(document.createTextNode(afterMatch));

      // Reemplazar el contenido del nodo con el nuevo fragmento
      node.replaceWith(fragment);
    }
  } else if (
    node.nodeType === 1 && // Si el nodo es un nodo de tipo elemento
    node.childNodes &&
    !["SCRIPT", "STYLE"].includes(node.tagName) && // Evitar scripts y estilos
    !authModal.contains(node) // Evitar el modal de autenticación
  ) {
    for (let i = 0; i < node.childNodes.length; i++) {
      highlightMatches(node.childNodes[i], query); // Llamada recursiva
    }
  }
}

// Event listener para el campo de búsqueda
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim();
  removeHighlights(); // Eliminar los resaltados previos

  if (query !== "") {
    highlightMatches(document.body, query); // Resaltar las coincidencias en el cuerpo del documento
  }
});
