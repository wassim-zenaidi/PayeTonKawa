<template>
  <div>
    <div v-if="isAuthenticated">
      <button @click="logout" class="auth-button logout">Logout 👥</button>
      <button class="auth-button cart" @click="viewCart">🛒 ({{ cartItems.length }})</button>
    </div>
    <div v-else>
      <button @click="login" class="auth-button login">Login 👥</button>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from 'vue';

export default {
  name: "AuthCard",
  setup() {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
    const cartItems = ref([]); // Exemple d'état du panier

    const viewCart = () => {
      // Logique pour afficher le contenu du panier
      console.log('View Cart');
    };

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout();
      },
      user,
      isAuthenticated,
      cartItems,
      viewCart,
    };
  },
};
</script>

<style scoped>
/* Styles pour les boutons de connexion et de déconnexion */
.auth-button {
  background-color: #fff; /* Couleur de fond */
  color: #262525; /* Couleur du texte */
  border: none; /* Pas de bordure */
  padding: 10px 20px; /* Remplissage */
  font-size: 1rem; /* Taille de police */
  cursor: pointer; /* Curseur de la souris */
  transition: background-color 0.3s ease; /* Transition fluide */
  border-radius: 3px;
  margin-right: 10px; /* Espacement entre les boutons */
}

.auth-button:hover {
  background-color: #b18366;
  color: #fff; /* Changement de couleur au survol */
}

.cart {
  background-color: #fff; /* Couleur de fond */
  color: #262525; /* Couleur du texte */
  border: 1px solid #262525; /* Bordure légère */
}

.cart:hover {
  background-color: #b18366;
  color: #fff; /* Changement de couleur au survol */
}
</style>
