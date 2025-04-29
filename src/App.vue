<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue' // Crearemos este componente
import TheFooter from './components/TheFooter.vue' // Crearemos este componente
</script>

<template>
  <TheHeader />

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>

<style scoped>
/* Estilos básicos para App.vue si son necesarios */
main {
  /* Añade padding o márgenes si el header/footer son fijos */
  /* Ejemplo: padding-top: 80px; */
  min-height: calc(100vh - 150px); /* Ajusta 150px según altura de header+footer */
}
</style>
