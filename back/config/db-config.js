const mysql = require('mysql2');
require('dotenv').config({ path: '../.env' });


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the config:', err.message);
        return;
    }
    console.log('Connected to the config');
});

module.exports = db;
