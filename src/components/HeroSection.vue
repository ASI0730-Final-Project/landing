<script setup>
// Puede tener lógica para el buscador en el futuro
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <h1>Searching for Gigs U are in the right place</h1>
      <div class="search-box">
        <input type="search" placeholder="What service are you looking for today?" />
        <button type="submit">Search</button>
      </div>
      <p class="freelancer-count">#1892 Freelancers</p>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: #4abcf1; /* O el color de fondo de la imagen */
  padding: 60px 0;
  text-align: center;
  /* Podrías añadir una imagen de fondo aquí */
}
.container {
  max-width: 800px; /* Contenedor más estrecho para el hero */
  margin: 0 auto;
  padding: 0 15px;
}
h1 {
  font-size: 2.5rem; /* Tamaño grande */
  margin-bottom: 20px;
}
.search-box {
  display: flex;
  max-width: 600px;
  margin: 0 auto 20px auto;
}
.search-box input {
  flex-grow: 1;
  padding: 15px 20px;
  border: 1px solid #e9e8e8;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}
.search-box button {
  padding: 15px 25px;
  border: none;
  background-color: #1dbf73; /* Color del botón */
  color: white;
  font-size: 1rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
.freelancer-count {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2b2a2a;
}
</style>
