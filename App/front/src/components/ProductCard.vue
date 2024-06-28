<template>
  <div class="gallery">
    <div v-for="(product) in products" :key="product.id" class="cafe-item">
      <img :src="product.image" :alt="product.name" class="cafe-image">
      <div class="cafe-details">
        <h2 class="cafe-name">{{ product.name }}</h2>
        <p class="cafe-description">{{ product.description }}</p>
        <div class="cafe-price-stock">
          <p class="cafe-price">{{ product.price }}</p>
          <p class="cafe-stock">En stock: {{ product.stock }}</p>
        </div>
        <div class="button-group">
          <router-link 
            :to="{ name: 'PurchasePage', params: { cafeId: product.id } }"
            class="buy-button"
          >
            Acheter
          </router-link>
        </div>
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
      products: []  // Initialisation vide pour les données de produits
    };
  },
  async mounted() {
    try {
      // Appel à votre API backend pour récupérer les produits
      const response = await axios.get('http://localhost:5174/adproducts');
      this.products = response.data; // Mettre à jour les produits avec les données reçues
    } catch (error) {
      console.error('Erreur lors de la récupération des produits depuis le backend:', error);
      alert('Erreur lors de la récupération des produits');
    }
  }
};
</script>

<style scoped>
/* Styles pour la galerie */
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
  padding: 5px;
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

/* Style pour le groupe de boutons */
.button-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
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
  text-decoration: none; /* Supprime le soulignement du lien */
  display: inline-block; /* Rend le bouton prendre la largeur du texte */
  outline: none; /* Supprime la bordure par défaut */
}

.buy-button:hover {
  background-color: #b58976;
}
</style>
