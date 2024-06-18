<template>
  <div class="gallery">
    <div v-for="(cafe, index) in cafes" :key="index" class="cafe-item">
      <img :src="cafe.image" :alt="cafe.name" class="cafe-image">
      <div class="cafe-details">
        <h2 class="cafe-name">{{ cafe.name }}</h2>
        <p class="cafe-description">{{ cafe.description }}</p>
        <div class="cafe-price-stock">
          <p class="cafe-price">{{ cafe.price }}</p>
          <p class="cafe-stock">En stock: {{ cafe.stock }}</p>
        </div>
        <button class="buy-button" @click="redirectToPurchase(cafe)">Acheter</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ProductCard",
  data() {
    return {
      cafes: [
        { name: "Café Arabica", image: "src/img/cafe1.webp", description: "Café Arabica pur, doux et aromatique.", price: "$12.99", stock: 10 },
        { name: "Café Robusta", image: "src/img/cafe2.webp", description: "Café Robusta corsé avec un arrière-goût fort.", price: "$10.99", stock: 5 },
        { name: "Café Latté", image: "src/img/cafe3.jpeg", description: "Café Latté avec une mousse onctueuse.", price: "$14.99", stock: 8 },
        { name: "Café Moka", image: "src/img/cafe4.webp", description: "Café Moka avec des notes de chocolat.", price: "$11.99", stock: 12 },
        // Ajoutez d'autres cafés ici
      ]
    };
  },
  methods: {
    redirectToPurchase(cafe) {
      // Remplacez l'URL par la page de commande ou de paiement réelle
      const purchaseUrl = `/purchase?product=${encodeURIComponent(cafe.name)}`;
      window.location.href = purchaseUrl;
    }
  }
};
</script>

<style scoped>
/* Style pour la galerie */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
}

/* Style pour chaque élément de café */
.cafe-item {
  border: 1px solid #262525;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cafe-item:hover {
  transform: translateY(-5px);
}

/* Style pour l'image du café */
.cafe-image {
  width: 100%;
  height: 200px; /* Ajustez la hauteur selon vos besoins */
  object-fit: cover; /* Réduire l'image en conservant son ratio */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Style pour les détails du café */
.cafe-details {
  padding: 15px;
  background-color: #262525;
}

/* Style pour le nom du café */
.cafe-name {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #ffffff;
}

/* Style pour la description du café */
.cafe-description {
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 10px;
}

/* Style pour le prix et le stock du café */
.cafe-price-stock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cafe-price {
  font-weight: bold;
  color: #cfa78e;
  font-size: 1.1rem;
}

.cafe-stock {
  color: #cfa78e;
  font-size: 0.9rem;
}

/* Style pour le bouton acheter */
.buy-button {
  background-color: #cfa78e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.buy-button:hover {
  background-color: #b58976;
}
</style>