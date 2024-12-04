const express = require('express'); //déclare une variable qui importe express
const port = process.env.PORT || 5000; //déclare une variable pour le port
const app = express(); //fonction native qui démarre le server

//test
app.get('/', (req, res)=>{
    res.render("Test fonctionne")
})
app.listen(port, () => {console.log(`Server started `);})