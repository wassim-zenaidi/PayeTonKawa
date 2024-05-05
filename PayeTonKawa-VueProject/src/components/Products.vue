<template>
  <div>
    <NavbarCard></NavbarCard>
    
    <div class="gallery">
      <div v-for="(cafe, index) in cafes" :key="index" class="cafe-item">
        <img :src="cafe.image" :alt="cafe.name" class="cafe-image">
        <h2 class="cafe-name">{{ cafe.name }}</h2>
        <p class="cafe-description">{{ cafe.description }}</p>
        <p class="cafe-price">{{ cafe.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';

export default {
  components: {
    NavbarCard,
  },
  data() {
    return {
      cafes: [
        { name: "Café Arabica", image: "../img/cafe-arabica.jpg", description: "Café Arabica pur, doux et aromatique.", price: "$12.99" },
        { name: "Café Robusta", image: "../img/cafe-robusta.jpg", description: "Café Robusta corsé avec un arrière-goût fort.", price: "$10.99" },
        { name: "Café Latté", image: "../img/cafe-latte.jpg", description: "Café Latté avec une mousse onctueuse.", price: "$14.99" },
        { name: "Café Moka", image: "../img/cafe-moka.jpg", description: "Café Moka avec des notes de chocolat.", price: "$11.99" },
        { name: "Café Décaféiné", image: "../img/cafe-decaffeine.jpg", description: "Café Décaféiné pour les amateurs de café sans caféine.", price: "$13.99" },
        { name: "Café Expresso", image: "../img/cafe-expresso.jpg", description: "Café Expresso corsé et intense.", price: "$9.99" },
        { name: "Café Frappé", image: "../img/cafe-frappe.jpg", description: "Café Frappé rafraîchissant pour l'été.", price: "$15.99" },
        { name: "Café Cappuccino", image: "../img/cafe-cappuccino.jpg", description: "Café Cappuccino avec une mousse légère.", price: "$16.99" },
        { name: "Café Vietnamien", image: "../img/cafe-vietnamien.jpg", description: "Café Vietnamien traditionnellement préparé.", price: "$17.99" },
        { name: "Café Turc", image: "../img/cafe-turc.jpg", description: "Café Turc servi avec du sucre.", price: "$18.99" },
        { name: "Café Ethipien", image: "../img/cafe-ethipien.jpg", description: "Café Ethipien avec des arômes floraux.", price: "$19.99" },
        { name: "Café Indonésien", image: "../img/cafe-indonesien.jpg", description: "Café Indonésien cultivé dans des îles volcaniques.", price: "$20.99" },
        { name: "Café Colombien", image: "../img/cafe-colombien.jpg", description: "Café Colombien réputé pour sa douceur.", price: "$21.99" },
        { name: "Café Péruvien", image: "../img/cafe-peruvien.jpg", description: "Café Péruvien cultivé en altitude.", price: "$22.99" },
        { name: "Café Mexicain", image: "../img/cafe-mexicain.jpg", description: "Café Mexicain avec des notes épicées.", price: "$23.99" },
        { name: "Café Brésilien", image: "../img/cafe-bresilien.jpg", description: "Café Brésilien issu des plantations du Brésil.", price: "$24.99" },
        { name: "Café Guatémaltèque", image: "../img/cafe-guatemalteque.jpg", description: "Café Guatémaltèque cultivé dans les montagnes.", price: "$25.99" },
        { name: "Café Costaricain", image: "../img/cafe-costaricain.jpg", description: "Café Costaricain aux arômes fruités.", price: "$26.99" },
        { name: "Café Kenyan", image: "../img/cafe-kenyan.jpg", description: "Café Kenyan aux notes acidulées.", price: "$27.99" },
        { name: "Café Tanzanien", image: "../img/cafe-tanzanien.jpg", description: "Café Tanzanien aux arômes riches.", price: "$28.99" },
        { name: "Café Rwandais", image: "../img/cafe-rwandais.jpg", description: "Café Rwandais cultivé dans les collines.", price: "$29.99" },
        { name: "Café Jamaïcain", image: "../img/cafe-jamaicain.jpg", description: "Café Jamaïcain Blue Mountain haut de gamme.", price: "$30.99" },
        { name: "Café Hawaïen", image: "../img/cafe-hawaien.jpg", description: "Café Hawaïen cultivé sur les îles.", price: "$31.99" },
        { name: "Café Indien", image: "../img/cafe-indien.jpg", description: "Café Indien aux épices exotiques.", price: "$32.99" },
        // Ajoutez d'autres cafés ici
      ]
    };
  }
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
}

.cafe-item {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cafe-item:hover {
  transform: translateY(-5px);
}

.cafe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.cafe-details {
  padding: 15px;
  background-color: #fff;
}

.cafe-name {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #333;
}

.cafe-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
}

.cafe-price {
  font-weight: bold;
  color: #007bff;
  font-size: 1.1rem;
}
</style>
