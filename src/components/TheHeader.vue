<script setup>
// Lógica del header (ej. manejar menú móvil, estado de login) irá aquí
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">Gigs U</div>
      <nav class="main-nav">
        <a href="#">Programming & Tech</a>
        <a href="#">Graphics & Design</a>
      </nav>
      <div class="actions">
        <input type="search" placeholder="Search..." class="header-search" />
        <a href="#">Orders</a>
        <button>Login</button>
        <button class="signup">Sign Up</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
}
.main-nav a,
.actions a,
.actions button {
  margin-left: 15px;
  text-decoration: none;
  color: #333;
}
.actions button {
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
}
.actions button.signup {
  background-color: #1dbf73; /* Color similar al de la imagen */
  color: white;
  border-color: #1dbf73;
}
.header-search {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 200px; /* Ajusta según necesites */
}
/* Añade más estilos para hacerlo responsive, etc. */
</style>
