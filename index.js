// Elementos del DOM
const container = document.getElementById("container");
const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");

// Cambiar entre el panel de inicio de sesión y registro
signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Registro de usuario
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const name = document.getElementById("regName").value.trim(); // Limpiar espacios en blanco
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;

    // Verificar si los campos están vacíos
    if (!name || !email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Obtener usuarios almacenados en localStorage o inicializar uno vacío
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el correo ya está registrado
    if (users.some((user) => user.email === email)) {
      alert("Este correo ya está registrado.");
      return;
    }

    // Agregar el nuevo usuario al arreglo
    users.push({ name, email, password });

    // Guardar el arreglo de usuarios en localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    // Regresar al formulario de inicio de sesión
    container.classList.remove("right-panel-active");
  });

// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el comportamiento por defecto del formulario

  const email = document.getElementById("loginEmail").value.trim(); // Limpiar espacios en blanco
  const password = document.getElementById("loginPassword").value;

  // Verificar si los campos están vacíos
  if (!email || !password) {
    alert("Por favor, complete ambos campos.");
    return;
  }

  // Obtener usuarios almacenados en localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Buscar el usuario con el correo y la contraseña proporcionados
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    alert(`Bienvenido, ${user.name}!`);
    // Redirigir a otra página (si es necesario)
    // window.location.href = "dashboard.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
});
