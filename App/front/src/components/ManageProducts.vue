<template>
  <div>
    <AdNavbarCard></AdNavbarCard>
    <form @submit.prevent="createProduct" class="product-form">
      <div class="form-group">
        <label>Nom du produit:</label>
        <input type="text" v-model="newProduct.name" required>
      </div>

      <div class="form-group">
        <label>Description:</label>
        <textarea v-model="newProduct.description" required></textarea>
      </div>

      <div class="form-group">
        <label>Prix:</label>
        <input type="number" v-model="newProduct.price" required>
      </div>

      <div class="form-group">
        <label>Stock:</label>
        <input type="number" v-model="newProduct.stock" required>
      </div>

      <div class="form-group">
        <label>Numéro:</label>
        <input type="text" v-model="newProduct.number" required>
      </div>

      <button type="submit">Créer le produit</button>
    </form>

    <!-- La partie pour afficher la liste des produits est supprimée -->

  </div>
</template>

<script>
import productService from '../services/products';
import AdNavbarCard from './AdNavbarCard.vue';

export default {
  components: {
    AdNavbarCard,
  },
  data() {
    return {
      newProduct: {
        name: '',
        description: '',
        price: null,
        stock: null,
        number: ''
      }
    };
  },
  methods: {
    async createProduct() {
      try {
        console.log('Produit à créer:', this.newProduct); // Ajoutez ce log
        await productService.addProduct(this.newProduct);
        alert('Produit créé avec succès!');
        // Ne pas récupérer la liste des produits ici car la route GET est supprimée
      } catch (error) {
        console.error('Erreur lors de la création du produit:', error);
        alert('Erreur lors de la création du produit');
      }
    }
  }
};
</script>

<style scoped>
.product-form {
  max-width: 600px;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

button {
  background-color: #6050dc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #b18366;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
