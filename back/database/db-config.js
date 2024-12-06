const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'mysql-melinox.alwaysdata.net',
    user: 'melinox_noel',
    password: 'salutnoel',
    database: 'melinox_noel' // Assurez-vous que cette base existe
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;
