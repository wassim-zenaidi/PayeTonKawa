<template>
    <div>
      <div v-if="isAuthenticated">
        <button @click="logout" class="auth-button logout">Logout</button>
        <h2>{{ user.name }}</h2>
        <h2>{{ user.email }}</h2>
        <h2>{{ user.picture }}</h2>
      </div>
      <div v-else>
        <button @click="login" class="auth-button login">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuth0 } from "@auth0/auth0-vue";
  
  export default {
    name: "AuthCard",
    setup() {
      const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  
      return {
        login: () => {
            loginWithRedirect();
        },
        logout: () => {
          logout();
        },
        user,
        isAuthenticated,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles pour les boutons de connexion et de déconnexion */
  .auth-button {
    background-color: #fff; /* Couleur de fond */
    color: #cfa78e; /* Couleur du texte */
    border: none; /* Pas de bordure */
    padding: 10px 20px; /* Remplissage */
    font-size: 1rem; /* Taille de police */
    cursor: pointer; /* Curseur de la souris */
    transition: background-color 0.3s ease; /* Transition fluide */
    border-radius: 3px;
  }
  
  .auth-button:hover {
    background-color: #b18366;
    color: #fff; /* Changement de couleur au survol */
  }
  
  </style>