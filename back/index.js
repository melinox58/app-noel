const express = require('express'); //déclare une variable qui importe express
const port = process.env.PORT || 5000; //déclare une variable pour le port
const dotenv = require('dotenv');
// Charger les variables d'environnement depuis .env.local si disponible, sinon depuis .env
dotenv.config({ path: '.env.local' });
const mongoose = require('mongoose');
const app = express(); //fonction native qui démarre le server
//middleware qui analyse (parse) le body des requetes et renvoi un objet req.body
const bodyParser = require('body-parser'); //middleware qui analyse
// cross origin
const cors = require('cors'); //autoriser les requetes depuis l'exterieur

//base de données mysql
 const mysql = require('mysql2');

const corsOptions = {
    origin: 'http://localhost:8080', // Autoriser les requêtes depuis cette origine
    origin: 'http://192.168.1.60:8080',
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


//Route users
const userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes); // Ajouter les routes pour les utilisateurs


//route avis
const avisRoutes = require('./Routes/avisRoutes');
app.use('/api/avis', avisRoutes);




//route registration



//route dashbord user

app.listen(port, () => {console.log(`Server started `);})