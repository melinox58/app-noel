const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
// const dbMongo = require('./config/mongoDb');
const db = require('./config/db-config');
const path = require('path');
const axios = require('axios');

require('dotenv').config();

const mysqlHost = process.env.DB_HOST;
const mongoUrl = process.env.MONGODB_URL;

console.log(`MySQL host: ${mysqlHost}`);
console.log(`MongoDB URL: ${mongoUrl}`);

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err));





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



app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
