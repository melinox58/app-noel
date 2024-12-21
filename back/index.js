const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); // Middleware pour analyser le body des requêtes
const cors = require('cors'); // Middleware pour la gestion des CORS
const dbMongo = require('./config/mongoDb'); // Connexion MongoDB
const db = require('./config/db-config'); // Config de la base de données relationnelle (MySQL, etc.)

const { sequelize } = require('./models/mysql/calendarModel');
const { Calendar } = require('./models/mysql/calendarModel');
const { Case } = require('./models/mysql/caseModel');

// Synchronisation de la base de données
sequelize.sync({ force: true }).then(() => {
    console.log('Les modèles ont été synchronisés avec succès.');
}).catch((error) => {
    console.error('Erreur lors de la synchronisation des modèles :', error);
});


// Charger les variables d'environnement depuis .env.local si disponible, sinon depuis .env
dotenv.config({ path: '.env.local' });

// === Middleware globaux ===

// Analyser le body des requêtes JSON
app.use(bodyParser.json());

// Configuration et activation de CORS
const corsOptions = {
    origin: 'http://localhost:8080', // Frontend sur le port 8080
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Autoriser ces en-têtes
    credentials: true, // Permet l'utilisation des cookies
    preflightContinue: true, // Autorise les requêtes préalables
    optionsSuccessStatus: 200 // Réponse 200 pour les requêtes OPTIONS
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

// Test de la connexion MySQL dans une route
app.get('/test-mysql', (req, res) => {
    db.query('SELECT NOW()', (err, result) => {
        if (err) {
            console.error('Erreur de requête MySQL:', err.message);
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        res.json({ message: 'Connexion réussie à MySQL', time: result[0] });
    });
});


// === Démarrage du serveur ===
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
