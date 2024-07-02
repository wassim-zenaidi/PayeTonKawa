<template>
  <div class="container">
    <AdNavbarCard></AdNavbarCard>
    <iframe
      class="powerbi-iframe"
      :src="powerBiEmbedUrl"
      frameborder="0"
      allowFullScreen="true"
    ></iframe>
    <footer>
      <p>&copy; 2024 Flower44. Tous droits réservés. 💮</p>
    </footer>
  </div>
</template>

<script>
import AdNavbarCard from './AdNavbarCard.vue';

export default {
  components: {
    AdNavbarCard,
  },
  data() {
    return {
      powerBiEmbedUrl: 'https://app.powerbi.com/reportEmbed?reportId=47c2eab5-9b06-45c6-b2a4-f0b527c31386&autoAuth=true&ctid=b9fec68c-c92d-461e-9a97-3d03a0f18b82',
      // Remplacez cette URL par celle que vous avez générée pour votre tableau de bord Power BI
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.powerbi-iframe {
  flex: 1;
  border: none;
}

footer {
  background-color: #333; /* Marron noisette */
  color: #b4aeae;
  text-align: center;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

header {
  background-color: #333;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
