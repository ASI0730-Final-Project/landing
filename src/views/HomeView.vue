<script setup>
import HeroSection from '@/components/HeroSection.vue' // Usamos '@' como alias para 'src/'
import GigCard from '@/components/GigCard.vue'
import { ref } from 'vue' // Para crear datos reactivos

// Datos de ejemplo estáticos (en un proyecto real vendrían de una API)
const popularGigs = ref([
  {
    id: 1,
    imgSrc: 'https://images.indianexpress.com/2022/11/Telegram-bots-2-1.jpg',
    sellerName: 'Olivia Hayes',
    description: 'Codes Simple Telegram Bots.',
    price: 50.0,
  },
  {
    id: 2,
    imgSrc:
      'https://www.collectivealternative.com/wp-content/uploads/2023/03/Social-Media-Marketing-for-Small-Businesses.jpg',
    sellerName: 'Isabelle Moreira',
    description: 'Manages social media for small businesses.',
    price: 84.0,
  },
  {
    id: 3,
    imgSrc: 'https://i.ytimg.com/vi/i83HYdsy7mg/maxresdefault.jpg',
    sellerName: 'Lucas Griffths',
    description: 'Creates corporate PowerPoint presentations.',
    price: 89.0,
  },
  // Añade más gigs si quieres, copiando la estructura de la imagen
  {
    id: 4,
    imgSrc: 'https://influencermarketinghub.com/wp-content/uploads/2019/04/Template.jpg',
    sellerName: 'Mia Zhang',
    description: 'Handles scheduling for influencers.',
    price: 89.0,
  },
  {
    id: 5,
    imgSrc:
      'https://www.dotsignage.com/wp-content/uploads/2024/03/eye-catching-digital-menu-boards-templates.jpg',
    sellerName: 'Allen Brooks',
    description: 'Designs digital menus for restaurants.',
    price: 89.0,
  },
])

// Podrías tener más listas para "Continue Browse", "Verified Pros", etc.
const continueBrowseGigs = ref([
  {
    id: 6,
    imgSrc: 'https://cdn.kwork.com/pics/t5/35/25315226-63f3d9cdd8464.jpg',
    sellerName: 'Ethan Carter',
    description: 'I will design and build a web page.',
    price: 89.0,
  },
  {
    id: 7,
    imgSrc:
      'https://img.freepik.com/premium-vector/responsive-website-design-with-desktop-computer-screen-tablet-computer-illustration_47012-80.jpg',
    sellerName: 'Sophia Bennett',
    description: 'Writes short scripts for commercials.',
    price: 189.0,
  },
  {
    id: 8,
    imgSrc:
      'https://img.freepik.com/premium-vector/responsive-website-design-with-desktop-computer-screen-tablet-computer-illustration_47012-80.jpg',
    sellerName: 'Emily Sharpe',
    description: 'UI/UX mockups for apps.',
    price: 160.0,
  },
  {
    id: 9,
    imgSrc:
      'https://img.freepik.com/premium-vector/responsive-website-design-with-desktop-computer-screen-tablet-computer-illustration_47012-80.jpg',
    sellerName: 'Alfredo Ugarte',
    description: 'UI/UX mockups for apps.',
    price: 260.0,
  },
  {
    id: 10,
    imgSrc:
      'https://img.freepik.com/premium-vector/responsive-website-design-with-desktop-computer-screen-tablet-computer-illustration_47012-80.jpg',
    sellerName: 'Noah Simmons',
    description: 'Technical document translation to Spanish.',
    price: 89.0,
  },
  // ... más gigs
])
</script>

<template>
  <HeroSection />

  <div class="main-content container">
    <section class="gig-section">
      <h2>Continue Browse <a href="#">&rarr;</a></h2>
      <div class="gig-list">
        <GigCard
          v-for="gig in continueBrowseGigs"
          :key="gig.id"
          :img-src="gig.imgSrc"
          :seller-name="gig.sellerName"
          :description="gig.description"
          :price="gig.price"
        />
      </div>
    </section>

    <section class="gig-section">
      <h2>Popular Tech Gigs</h2>
      <div class="gig-list">
        <GigCard
          v-for="gig in popularGigs"
          :key="gig.id"
          :img-src="gig.imgSrc"
          :seller-name="gig.sellerName"
          :description="gig.description"
          :price="gig.price"
          currency="s/."
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.main-content {
  padding-top: 40px; /* Espacio después del Hero */
}
.gig-section {
  margin-bottom: 40px;
}
.gig-section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gig-section h2 a {
  font-size: 0.8em;
  text-decoration: none;
  color: #0073bb; /* Color de enlace */
}

.gig-list {
  display: grid;
  /* Crea 5 columnas en pantallas grandes, ajusta según necesites */
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px; /* Espacio entre las tarjetas */
}

/* Adapta las columnas para pantallas más pequeñas (responsive) */
@media (max-width: 1200px) {
  .gig-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
@media (max-width: 768px) {
  .gig-list {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}
@media (max-width: 480px) {
  .gig-list {
    /* Una columna en móviles muy pequeños */
    grid-template-columns: 1fr;
  }
}
</style>
