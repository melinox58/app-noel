const express = require('express'); //déclare une variable qui importe express
const port = process.env.PORT || 5000; //déclare une variable pour le port
const db = require('./config/db-config');
const mongoose = require('mongoose');
const dbMongo = require('./config/mongoDb');
const dotenv = require('dotenv');
// Charger les variables d'environnement depuis .env.local si disponible, sinon depuis .env
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });
const app = express(); //fonction native qui démarre le server
//middleware qui analyse (parse) le body des requetes et renvoi un objet req.body
const bodyParser = require('body-parser'); //middleware qui analyse
// cross origin
const cors = require('cors'); //autoriser les requetes depuis l'exterieur

//base de données mysql
 const mysql = require('mysql2');
 db.connect();

 //connexion Mongo
dbMongo();

const corsOptions = {
    origin: 'http://localhost:8080', // Autoriser les requêtes depuis cette origine
    methods: 'GET,POST,PUT,DELETE', // Autoriser les méthodes GET, POST, PUT, DELETE
    allowedHeaders: 'Content-Type, Authorization', // Autoriser les en-têtes Content-Type et Authorization
    credentials: true // Autoriser les cookies et les en-têtes d'autorisation
};
app.use(cors(corsOptions)); // Utiliser le middleware CORS avec les options configurées

//test
app.get('/', (req, res)=>{
    res.json("Test fonctionne")
})
//Route Calendar et Cases
const calendarRoutes = require('./Routes/calendarRoutes');
app.use('/api/calendar', calendarRoutes);
const caseRoutes = require('./routes/caseRoutes');
app.use('/api', caseRoutes);

//bodyParser pour analyser le coprs de la requete
app.use(bodyParser.json());

//Route surprise et avis
const surpriseRoutes = require('./routes/surpriseRoutes');
app.use('/api/surprises', surpriseRoutes);
const avisRoutes = require('./routes/avisRoutes');
app.use('/api/avis', avisRoutes);

//Route users
const userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes); // Ajouter les routes pour les utilisateurs






//route registration



//route dashbord user

app.listen(port, () => {console.log(`Server started `);})