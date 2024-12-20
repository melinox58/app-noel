// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const morgan = require('morgan'); // pour debug des requêtes
const bodyParser = require('body-parser'); // Middleware qui analyse le body des requêtes
const cors = require('cors'); // Middleware pour la gestion CORS
const dbMongo = require('./config/mongoDb'); // Connexion MongoDB
const db = require('./config/db-config'); // Config de la base de données (MySQL ou autre)

// Charger les variables d'environnement depuis .env.local si disponible, sinon depuis .env
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// Middleware pour analyser le body des requêtes et renvoyer un objet req.body
app.use(bodyParser.json());

// Middleware CORS pour gérer les requêtes externes
const corsOptions = {
    origin: 'http://localhost:8080', // Autoriser les requêtes depuis cette origine
    methods: 'GET,POST,PUT,DELETE', // Autoriser les méthodes GET, POST, PUT, DELETE
    allowedHeaders: 'Content-Type, Authorization', // Autoriser les en-têtes Content-Type et Authorization
    credentials: true // Autoriser les cookies et les en-têtes d'autorisation
};

app.use(cors(corsOptions)); // Utiliser le middleware CORS avec les options configurées

// Middleware pour logger les requêtes HTTP
app.use(morgan('dev'));

// Test de la route principale
app.get('/', (req, res) => {
    res.json("Test fonctionne");
});

// Route Calendrier
const calendarRoutes = require('./Routes/calendarRoutes');
app.use('/api/calendars', calendarRoutes);

// Route Cases
const caseRoutes = require('./Routes/caseRoutes');
app.use('/api/cases', caseRoutes);

// Route Surprises
const surpriseRoutes = require('./Routes/surpriseRoutes');
app.use('/api/surprises', surpriseRoutes);

// Route Avis
const avisRoutes = require('./Routes/avisRoutes');
app.use('/api/avis', avisRoutes);

// Route Utilisateurs
const userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes); // Ajouter les routes pour les utilisateurs

// Connexion MongoDB (commentée pour le moment)
(async () => {
    try {
        await dbMongo();  // Connexion à MongoDB
        console.log("Connexion à MongoDB réussie.");
    } catch (error) {
        console.error("Erreur lors de la connexion à MongoDB:", error);
    }
})();

// Démarrer le serveur Express
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
