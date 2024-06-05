const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// routes (par exemple, les endpoints API)
app.get('/api/produits', (req, res) => {
  // Implémenter la logique pour récupérer les produits depuis votre base de données
  // Renvoyer les produits au format JSON
  res.json({ produits: [] });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
