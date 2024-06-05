<template>
   <div class="container">
  <div class="product-view">
    <ProductCard />
  </div>
</div>

  </template>
  
  <script>
  import ProductCard from '@/components/ProductCard.vue';
  
  export default {
    name: "ProductView",
    components: {
      ProductCard,
    },
  };
  </script>
  
  <style scoped>
  .container {
    height: 100vh; /* Hauteur de 100% de la fenêtre visible */
  }
  
  .product-view {
    width: 50%; /* Remplit la moitié de l'écran */
    float: right; /* Aligne à droite */
   
    border-radius: 8px; /* Coins arrondis */
    padding: 10px; /* Espace intérieur */
    height: 83%; /* Hauteur maximale */
    overflow-y: auto; /* Ajoute un défilement vertical si nécessaire */
    margin-bottom: 20px;
    scrollbar-width: thin; /* Largeur du défilement */
  scrollbar-color: #ccc #f5f5f5; /* Couleur du défilement */
  }
  /* Style pour le défilement vertical */
.product-view::-webkit-scrollbar {
  width: 8px; /* Largeur du défilement */
}

.product-view::-webkit-scrollbar-track {
  background: #f5f5f5; /* Couleur de fond du défilement */
}

.product-view::-webkit-scrollbar-thumb {
  background-color: #ccc; /* Couleur de fond du curseur */
  border-radius: 10px; /* Coins arrondis du curseur */
}

.product-view::-webkit-scrollbar-thumb:hover {
  background-color: #999; /* Couleur du curseur au survol */
}
  </style>
  
  