import './assets/main.css';
import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue'
import router from './router'; // Chemin vers le fichier du routeur

const app = createApp(App);

app.use(
  createAuth0({
    domain:"dev-qu8po7wzxi3qc6om.us.auth0.com",
    clientId: "xWq2klm39umFkOUph3Itl1z7gtb9P88f",
    authorizationParams: {
    redirect_uri: window.location.origin
    }
  })
);

app.use(router); // Utilisez le routeur ici
app.mount('#app');
