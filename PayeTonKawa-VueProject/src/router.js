import { createRouter, createWebHistory } from 'vue-router';

import Products from './components/Products.vue';
import Contact from './components/Contact.vue';
import Home from './components/Home.vue'; // Correction du nom du composant

const routes = [
  { path: '/', component: Home }, // Utilisation de Accueil au lieu de Acceuil
  { path: '/Products', component: Products },
  { path: '/Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
