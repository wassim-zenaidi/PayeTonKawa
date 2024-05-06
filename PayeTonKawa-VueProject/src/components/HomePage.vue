<template>
  <div>
    <NavbarCard></NavbarCard>
    <main>
      <section class="welcome-section">
        <h1>#PayeTonKawa ☕</h1>
        <p>Découvrez notre sélection de cafés de qualité</p>
        <div class="thumbnails">
          <router-link to="/Products" class="thumbnail" @mouseover="toggleTextVisibility(true, 0)" @mouseleave="toggleTextVisibility(false)">
            <!-- Contenu de la vignette "Machine" -->
            <div class="image-container">
              <h2 class="thumbnail-text" :class="{ 'visible': isTextVisible && activeThumbnail === 0 }">Machine</h2>
              <img src="../img/machine.webp" class="thumbnail-image">
            </div>
          </router-link>
          <router-link to="/Products" class="thumbnail" @mouseover="toggleTextVisibility(true, 1)" @mouseleave="toggleTextVisibility(false)">
            <!-- Contenu de la vignette "Café" -->
            <div class="image-container">
              <h2 class="thumbnail-text" :class="{ 'visible': isTextVisible && activeThumbnail === 1 }">Café</h2>
              <img src="../img/café.jpeg" class="thumbnail-image">
            </div>
          </router-link>
          <router-link to="/Products" class="thumbnail" @mouseover="toggleTextVisibility(true, 2)" @mouseleave="toggleTextVisibility(false)">
            <!-- Contenu de la vignette "Accessoires" -->
            <div class="image-container">
              <h2 class="thumbnail-text" :class="{ 'visible': isTextVisible && activeThumbnail === 2 }">Accessoires</h2>
              <img src="../img/truc.jpeg" class="thumbnail-image">
            </div>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default {
  components: {
    NavbarCard,
  },
  data() {
    return {
      isTextVisible: false,
      activeThumbnail: null
    };
  },
  methods: {
    toggleTextVisibility(visible, index) {
      this.isTextVisible = visible;
      this.activeThumbnail = visible ? index : null;
    }
  }
};
</script>

<style scoped>
/* Styles CSS */
.thumbnails {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.thumbnail {
  text-align: center;
  border: 2px solid #fff; /* Légère bordure blanche */
  border-radius: 10px;
  width: 200px;
  overflow: hidden;
  background-color: #f5f5dc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Légère ombre */
  transition: box-shadow 0.3s ease;
}

.thumbnail:hover {
  background-color: rgb(3, 3, 3);
}

.image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.thumbnail:hover .thumbnail-image {
  opacity: 0.7;
}

.thumbnail-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  z-index: 1;
  transition: color 0.3s ease;
}

.thumbnail-text.visible {
  color: white;
}
</style>
