// Modelo de Usuario
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

// Datos de usuarios en la "base de datos"
let userDatabase = [];

// Mostrar mensajes de notificación
function showMessage(message, color = "#d4edda") {
  notification.textContent = message;
  notification.style.backgroundColor = color;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

// Función para registrar un nuevo usuario
function registerUser(username, email, password) {
  // Verifica si el correo ya está registrado
  if (userDatabase.some((u) => u.email === email)) {
    showMessage("Este correo ya está registrado", "#f8d7da");
    return false;
  }

  // Crea un nuevo usuario y lo agrega a la base de datos
  const newUser = new User(username, email, password);
  userDatabase.push(newUser);
  showMessage("Registro exitoso. Ahora inicia sesión", "#cce5ff");
  return true;
}

// Función para iniciar sesión
function loginUser(email, password) {
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

      // Oculta el modal de autenticación y muestra el contenido principal
      authModal.classList.remove("active");
      authModal.style.display = "none";
      mainContent.style.display = "block";
    }, 1500);
  } else {
    showMessage("Credenciales incorrectas", "#f8d7da");
  }
}

// Alterna entre registro y login
toggleForm.addEventListener("click", () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Iniciar Sesión" : "Registrarse";
  authAction.textContent = isLogin ? "Entrar" : "Crear Cuenta";

  // Muestra u oculta el campo de nombre de usuario según corresponda
  document.getElementById("username").style.display = isLogin
    ? "none"
    : "block";
});

// Acción de registro o login
authAction.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validación de campos vacíos
  if (!email || !password || (!isLogin && !username)) {
    showMessage("Completa todos los campos", "#f8d7da");
    return;
  }

  // Lógica para iniciar sesión
  if (isLogin) {
    loginUser(email, password);
  } else {
    // Lógica para registrar usuario
    if (registerUser(username, email, password)) {
      // Cambiar automáticamente a modo login después de un registro exitoso
      toggleForm.click();
    }
  }
});
