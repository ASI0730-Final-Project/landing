const regForm = document.getElementById("registerForm");
if (regForm) {
  regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
      name: regForm.regName.value.trim(),
      lastname: regForm.regLastname.value.trim(),
      email: regForm.regEmail.value.trim(),
      pwd: regForm.regPassword.value,
      role: regForm.regRole.value,
    };
    if (Object.values(user).some((v) => !v)) return alert("Fill all fields");
    localStorage.setItem("giguUser", JSON.stringify(user));
    alert("User registered ✔️ – You can log in now");
    switchView("login");
    regForm.reset();
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.loginEmail.value.trim();
    const pwd = loginForm.loginPassword.value;
    const stored = JSON.parse(localStorage.getItem("giguUser") || "{}");
    if (email === stored.email && pwd === stored.pwd) {
      alert(`Welcome back, ${stored.name}!`);
      switchView("home");
    } else {
      alert("Invalid credentials");
    }
  });
}
