const authModal = document.getElementById("authModal");
const toggleFormBtn = document.getElementById("toggleForm");
const authActionBtn = document.getElementById("authAction");
const formTitle = document.getElementById("formTitle");
const mainContent = document.getElementById("mainContent");
const notification = document.getElementById("notification");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

let isLogin = false;
const userDatabase = [];

function showMessage(message, color = "#d4edda") {
  notification.textContent = message;
  notification.style.backgroundColor = color;
  notification.style.display = "block";
  setTimeout(() => (notification.style.display = "none"), 3000);
}

function toggleFormMode() {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Iniciar Sesión" : "Registrarse";
  authActionBtn.textContent = isLogin ? "Entrar" : "Crear Cuenta";
  usernameInput.style.display = isLogin ? "none" : "block";
}

function validateInputs(username, email, password) {
  if (!email || !password || (!isLogin && !username)) {
    showMessage("Completa todos los campos", "#f8d7da");
    return false;
  }

  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("Correo inválido", "#f8d7da");
    return false;
  }

  return true;
}

function handleLogin(email, password) {
  const user = userDatabase.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) {
    showMessage("Credenciales incorrectas", "#f8d7da");
    return;
  }

  showMessage(
    `¡Bienvenido, ${user.username || email}! Redirigiendo...`,
    "#d1ecf1"
  );

  setTimeout(() => {
    authModal.classList.remove("active");
    authModal.style.display = "none";
    mainContent.style.display = "block";
  }, 1500);
}

function handleRegistration(username, email, password) {
  if (userDatabase.some((u) => u.email === email)) {
    showMessage("Este correo ya está registrado", "#f8d7da");
    return;
  }

  userDatabase.push({ username, email, password });
  showMessage("Registro exitoso. Ahora inicia sesión", "#cce5ff");
  toggleFormMode(); // cambia a modo login automáticamente
}

toggleFormBtn.addEventListener("click", toggleFormMode);

authActionBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!validateInputs(username, email, password)) return;

  isLogin
    ? handleLogin(email, password)
    : handleRegistration(username, email, password);
});
