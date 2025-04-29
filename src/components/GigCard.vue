<script setup>
// Define las propiedades que este componente espera recibir
const props = defineProps({
  imgSrc: String,
  sellerAvatar: String, // Opcional, no muy visible en la imagen principal
  sellerName: String,
  description: String,
  price: Number,
  currency: {
    // Prop con valor por defecto
    type: String,
    default: 's/.',
  },
})
</script>

<template>
  <div class="gig-card">
    <img :src="props.imgSrc" alt="Gig Image" class="gig-image" />
    <div class="seller-info">
      <span>{{ props.sellerName }}</span>
    </div>
    <p class="gig-description">{{ props.description }}</p>
    <div class="gig-price">Starting at {{ props.currency }}{{ props.price.toFixed(2) }}</div>
  </div>
</template>

<style scoped>
.gig-card {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}
.gig-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.gig-image {
  width: 100%;
  height: 150px; /* Ajusta la altura */
  object-fit: cover; /* Asegura que la imagen cubra el espacio sin distorsionarse */
  display: block;
}
.seller-info,
.gig-description,
.gig-price {
  padding: 10px 15px;
}
.seller-info {
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #302f2f;
}
/* .seller-avatar { ... } */
.gig-description {
  font-size: 1em;
  color: #302f2f;
  min-height: 60px; /* Para alinear tarjetas de altura variable */
}
.gig-price {
  font-weight: bold;
  color: #0e0d0d;
  text-align: right;
  border-top: 1px solid #eee;
  padding-top: 10px;
  margin-top: 10px;
}
</style>
