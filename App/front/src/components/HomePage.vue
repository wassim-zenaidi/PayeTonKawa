<template>
  <div>
    <NavbarCard></NavbarCard>
    <main>
      <section class="welcome-section">
        <h1>#PayeTonKawa ☕</h1>
        <p>Découvrez notre sélection de cafés de qualité</p>
      </section>
    </main>
  </div>
</template>

<script>
import NavbarCard from './NavbarCard.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default {
  name: "HomePage",
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
/* Styles CSS ajustés */
.welcome-section {
  text-align: center;
  margin-top: 50px;
}

.welcome-section h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
}

.welcome-section p {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 40px;
}

.thumbnails {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.thumbnail {
  text-align: center;
  border: 2px solid #fff;
  border-radius: 10px;
  width: 200px;
  overflow: hidden;
  background-color: #f5f5dc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.thumbnail:hover {
  background-color: #333;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.thumbnail-image {
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
  font-size: 1.3rem;
  color: transparent;
  z-index: 1;
  transition: color 0.3s ease;
}

.thumbnail-text.visible {
  color: white;
}
</style>
