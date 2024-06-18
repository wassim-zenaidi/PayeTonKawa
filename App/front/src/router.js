import { createRouter, createWebHistory } from 'vue-router';

import Products from './components/ProductsPage.vue';
import Contact from './components/ContactPage.vue';
import Home from './components/HomePage.vue'; 
import Store from './components/StorePage.vue'; 

const routes = [
  { path: '/', component: Home }, 
  { path: '/Products', component: Products },
  { path: '/Contact', component: Contact },
  { path: '/Store', component: Store },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
