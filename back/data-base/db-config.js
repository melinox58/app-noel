const mysql = require('mysql2');
const db = mysql.createConnection({
    host:'127.0.0.1:3306',
    user:'root',
    password:'',
    db:'osez_noel'
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;