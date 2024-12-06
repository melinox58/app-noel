const express = require('express'); //déclare une variable qui importe express
const port = process.env.PORT || 5000; //déclare une variable pour le port
const app = express(); //fonction native qui démarre le server

//test
app.get('/', (req, res)=>{
    res.json("Test fonctionne")
})

//route user
const users = require('./routes/users')
app.use('/users', users);

//route registration

//route login
const login = require('./routes/users')
app.use('/users/login', login);

//route dashbord user

app.listen(port, () => {console.log(`Server started `);})