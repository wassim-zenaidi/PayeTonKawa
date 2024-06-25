const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const app = express();
const port = 3000;

// Chaîne de connexion à SQL Server
const dbConfig = {
    user: 'ptk',
    password: 'Payetonkawa44',
    server: 'ptk-serv.database.windows.net',
    database: 'ptk',
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
};

// Middleware pour analyser les requêtes JSON et configurer CORS
app.use(express.json());
app.use(cors()); // Permet toutes les origines

// Connexion à la base de données
sql.connect(dbConfig).then(pool => {
    if (pool.connecting) {
        console.log('Connexion à la base de données en cours...');
    }
    if (pool.connected) {
        console.log('Connecté à la base de données');
    }

    // Route pour obtenir les données de la table "customers"
    app.get('/customers', async (req, res) => {
        try {
            const request = pool.request();
            const result = await request.query('SELECT first_name, last_name, mail FROM customers');
            res.status(200).json(result.recordset);
        } catch (err) {
            console.error('Erreur lors de la récupération des données:', err);
            res.status(500).send('Erreur lors de la récupération des données');
        }
    });

}).catch(err => {
    console.error('Erreur de connexion à la base de données:', err);
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
