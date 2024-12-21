const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); // Middleware pour analyser le body des requêtes
const cors = require('cors'); // Middleware pour la gestion des CORS
const dbMongo = require('./config/mongoDb'); // Connexion MongoDB
const db = require('./config/db-config'); // Config de la base de données relationnelle (MySQL, etc.)

// Charger les variables d'environnement depuis .env.local si disponible, sinon depuis .env
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// === Middleware globaux ===

// Analyser le body des requêtes JSON
app.use(bodyParser.json());

// Configuration et activation de CORS
const corsOptions = {
    origin: 'http://localhost:8080', // Origine autorisée (frontend)
    methods: 'GET,POST,PUT,DELETE', // Méthodes autorisées
    allowedHeaders: 'Content-Type, Authorization', // En-têtes autorisés
    credentials: true // Autoriser les cookies et les en-têtes d'autorisation
};
app.use(cors(corsOptions)); // Utilisation du middleware CORS


// === Routes ===

// Test de fonctionnement de l'API
app.get('/', (req, res) => {
    res.json({ message: "L'API fonctionne correctement !" });
});

// Routes spécifiques
const calendarRoutes = require('./Routes/calendarRoutes');
app.use('/api/calendars', calendarRoutes); // Gestion des calendriers

const caseRoutes = require('./Routes/caseRoutes');
app.use('/api/cases', caseRoutes); // Gestion des cases

const surpriseRoutes = require('./Routes/surpriseRoutes');
app.use('/api/surprises', surpriseRoutes); // Gestion des surprises

const avisRoutes = require('./Routes/avisRoutes');
app.use('/api/avis', avisRoutes); // Gestion des avis

const userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes); // Gestion des utilisateurs

// === Connexions aux bases de données ===

// Connexion à MongoDB
(async () => {
    try {
        await dbMongo();
        console.log("Connexion à MongoDB réussie.");
    } catch (error) {
        console.error("Erreur lors de la connexion à MongoDB :", error);
    }
})();

// === Démarrage du serveur ===
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
