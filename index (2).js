const authModal = document.getElementById("authModal");
const toggleForm = document.getElementById("toggleForm");
const authAction = document.getElementById("authAction");
const formTitle = document.getElementById("formTitle");
const mainContent = document.getElementById("mainContent");
const notification = document.getElementById("notification");

let isLogin = false;
let userDatabase = [];

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
        const authModal = document.getElementById("authModal");
        const mainContent = document.getElementById("mainContent");

        // Oculta el modal de autenticación y muestra la web
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

    // Cambiar a modo login automáticamente
    toggleForm.click();
  }
});
