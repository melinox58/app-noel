// config/db.js
const mysql = require('mysql2');
require('dotenv').config({ path: '.env.local' }); // Assurez-vous que le chemin est correct

// Créer une connexion à MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.message);
        return;
    }
    console.log('Connexion à MySQL réussie');
});

// Exporter l'objet db pour l'utiliser dans d'autres fichiers
module.exports = db;
