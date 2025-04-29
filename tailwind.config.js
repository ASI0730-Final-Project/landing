/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Asegúrate de que escanee todos tus archivos Vue/JS/TS
  ],
  theme: {
    extend: {
      // Aquí puedes añadir colores, fuentes, etc., personalizados para que coincidan exactamente
      colors: {
        'gigs-green': '#1dbf73', // El verde de los botones "Sign Up" y "Search"
        'gigs-gray': {
          // Diferentes tonos de gris si son necesarios
          light: '#f5f5f5',
          medium: '#e0e0e0',
          dark: '#62646a', // Texto secundario
        },
      },
    },
    // Puedes configurar un contenedor centralizado por defecto
    container: {
      center: true,
      padding: '1rem', // Equivalente a 16px de padding lateral
      screens: {
        // Define el ancho máximo del contenedor
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px', // Coincide con el max-width que usamos antes
        //'2xl': '1536px', // Puedes añadir más tamaños si es necesario
      },
    },
  },
  plugins: [],
}
