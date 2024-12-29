const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbMongo = require('./config/mongoDb');
const db = require('./config/db-config');
const path = require('path');
const axios = require('axios');

const { sequelize } = require('./models/mysql/calendarModel');
const { Calendar } = require('./models/mysql/calendarModel');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

app.use(express.static(path.join(__dirname, '../back/public')));
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '../back/public/index.html')); });

app.use(bodyParser.json());

// Configuration de CORS
const corsOptions = {
    origin: ['https://osez-noel-3f432aeb3b00.herokuapp.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
    credentials: true // Autorisation des cookies et des en-têtes sensibles
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({ message: "L'API fonctionne correctement !" });
});

const calendarRoutes = require('./Routes/calendarRoutes');
app.use('/api/calendar', calendarRoutes);

const surpriseRoutes = require('./Routes/surpriseRoutes');
app.use('/api/surprises', surpriseRoutes);

const avisRoutes = require('./Routes/avisRoutes');
app.use('/api/avis', avisRoutes);

const userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes);

(async () => {
    try {
        await dbMongo();
        console.log("Connexion à MongoDB réussie.");
    } catch (error) {
        console.error("Erreur lors de la connexion à MongoDB :", error);
        process.exit(1);  // Arrêt de l'application si la connexion échoue
    }
})();

app.get('/test-mysql', (req, res) => {
    db.query('SELECT NOW()', (err, result) => {
        if (err) {
            console.error('Erreur de requête MySQL:', err.message);
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        res.json({ message: 'Connexion réussie à MySQL', time: result[0] });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
