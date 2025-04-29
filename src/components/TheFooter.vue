<script setup>
// Lógica del footer si la hubiera
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} Gigs U Clone. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #f5f5f5;
  padding: 20px 0;
  margin-top: 40px; /* Espacio antes del footer */
  text-align: center;
  color: #666;
  border-top: 1px solid #eee;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
