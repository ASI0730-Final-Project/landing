const container = document.getElementById("container");
const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");

signUpBtn.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);
signInBtn.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

// Registro
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const sectionMap = {
      proyectos: "#servicios",
      freelancers: "#nosotros",
      emprendimientos: "#servicios",
      contacto: "#contacto",
      clientes: "#clientes",
      nosotros: "#nosotros",
    };

    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) {
      alert("Este correo ya está registrado.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    container.classList.remove("right-panel-active");
  });

// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    alert(`Bienvenido, ${user.name}!`);
    // Aquí puedes redirigir a otra página:
    // window.location.href = "dashboard.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
});
