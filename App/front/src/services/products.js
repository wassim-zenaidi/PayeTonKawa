import axios from 'axios';

// Obtenez le nom d'hôte et le port actuels
const hostname = window.location.hostname;
const port = 5174;

// Définissez l'URL de base de manière dynamique
const baseURL = `http://${hostname}:${port}`;

const apiClient = axios.create({
  baseURL: baseURL, // Utilisez l'URL de base générée dynamiquement
  headers: {
    'Content-Type': 'application/json'
  }
});

const productService = {
  async addProduct(product) {
    try {
      const response = await apiClient.post('/adproducts', product);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit:', error);
      throw error;
    }
  },

  async getAllProducts() {
    try {
      const response = await apiClient.get('/adproducts');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
      throw error;
    }
  },

  // D'autres méthodes pour mettre à jour ou supprimer des produits peuvent être ajoutées ici
};

export default productService;
