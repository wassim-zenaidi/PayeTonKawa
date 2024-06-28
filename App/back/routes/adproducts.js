const express = require('express');
const sql = require('mssql');
const router = express.Router();

module.exports = (pool) => {
    // Route pour insérer des données dans la table "products"
    router.post('/', async (req, res) => {
        const { price, stock, id, description, name, number } = req.body;
        
        // Log the received request body
        console.log('Requête reçue pour ajouter un produit:', req.body);

        // Vérifiez que toutes les valeurs sont fournies
        if (price == null || stock == null || description == null || name == null || number == null) {
            console.error('Des valeurs manquent ou sont invalides dans la requête:', req.body);
            return res.status(400).send('Des valeurs manquent ou sont invalides');
        }

        try {
            const request = pool.request();
            await request
                .input('price', sql.Float, price)
                .input('stock', sql.Int, stock)
                .input('description', sql.NVarChar, description)
                .input('name', sql.NVarChar, name)
                .input('number', sql.NVarChar, number)
                .query('INSERT INTO products (price, stock, description, name, number) VALUES (@price, @stock, @description, @name, @number)');
            
            // Log success message
            console.log('Produit ajouté avec succès:', { price, stock, description, name, number });
            res.status(201).send('Produit ajouté avec succès');
        } catch (err) {
            // Log error message
            console.error('Erreur lors de l\'insertion du produit:', err);
            res.status(500).send('Erreur lors de l\'insertion du produit');
        }
    });

    // Route pour sélectionner tous les produits
    router.get('/', async (req, res) => {
        try {
            const request = pool.request();
            const result = await request.query('SELECT * FROM products');
            
            // Log the retrieved data
            console.log('Produits récupérés:', result.recordset);
            res.status(200).json(result.recordset);
        } catch (err) {
            // Log error message
            console.error('Erreur lors de la récupération des produits:', err);
            res.status(500).send('Erreur lors de la récupération des produits');
        }
    });

    // Route pour supprimer un produit par son ID
    router.delete('/:id', async (req, res) => {
        const productId = req.params.id;

        try {
            const request = pool.request();
            await request
                .input('id', sql.Int, productId)
                .query('DELETE FROM products WHERE id = @id');
            
            // Vérifier si une ligne a été affectée pour confirmer la suppression
            if (request.rowsAffected[0] === 0) {
                console.log(`Produit avec ID ${productId} non trouvé`);
                return res.status(404).send(`Produit avec ID ${productId} non trouvé`);
            }

            // Log success message
            console.log(`Produit avec ID ${productId} supprimé avec succès`);
            res.status(200).send(`Produit avec ID ${productId} supprimé avec succès`);
        } catch (err) {
            // Log error message
            console.error('Erreur lors de la suppression du produit:', err);
            res.status(500).send('Erreur lors de la suppression du produit');
        }
    });

    return router;
};
