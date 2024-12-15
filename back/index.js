const express = require('express'); // Déclare une variable qui importe express
const PORT = process.env.PORT || 5000;
const db = require('./config/db-config');
const mongoose = require('mongoose');
const dbMongo = require('./config/mongoDb');
const dotenv = require('dotenv');
const morgan = require('morgan'); // pour debug requetes

// Charger les variables d'environnement depuis .env.local si disponible, sinon depuis .env
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const app = express(); // Fonction native qui démarre le serveur

// Middleware qui analyse (parse) le body des requêtes et renvoie un objet req.body
const bodyParser = require('body-parser'); // Middleware qui analyse
app.use(bodyParser.json());

// Cross Origin
const cors = require('cors'); // Autoriser les requêtes depuis l'extérieur

// Base de données MySQL
const mysql = require('mysql2');
db.connect();

//Connexion Mongo (commentée pour le moment)
(async () => {
    await dbMongo();
})();

const corsOptions = {
    origin: 'http://localhost:8080', // Autoriser les requêtes depuis cette origine
    methods: 'GET,POST,PUT,DELETE', // Autoriser les méthodes GET, POST, PUT, DELETE
    allowedHeaders: 'Content-Type, Authorization', // Autoriser les en-têtes Content-Type et Authorization
    credentials: true // Autoriser les cookies et les en-têtes d'autorisation
};

app.use(cors(corsOptions)); // Utiliser le middleware CORS avec les options configurées

// Middleware pour logger les requêtes HTTP
app.use(morgan('dev'));

// Test
app.get('/', (req, res) => {
    res.json("Test fonctionne");
});

// Route Calendrier et Cases
const calendarRoutes = require('./routes/calendarRoutes');
app.use('/api/calendar', calendarRoutes);

const caseRoutes = require('./routes/caseRoutes');
app.use('/api', caseRoutes);


// Charger les modèles
const { Calendar } = require('./models/mysql/calendarModel');
const Case = require('./models/mysql/caseModel');

// Définir les associations entre Calendar et cases
// Case.belongsTo(Calendar, { foreignKey: 'calendars_id' });
// Calendar.hasMany(Case, { foreignKey: 'calendars_id' });

//Route surprise et avis (commentées pour le moment)
const surpriseRoutes = require('./routes/surpriseRoutes');
app.use('/api/surprises', surpriseRoutes);

const avisRoutes = require('./routes/avisRoutes');
app.use('/api/avis', avisRoutes);

// Route users
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // Ajouter les routes pour les utilisateurs

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
