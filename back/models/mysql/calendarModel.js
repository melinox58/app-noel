const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config({ path: '../../.env' });
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false // Désactive les colonnes createdAt et updatedAt
    }
});

// Définir le modèle Calendar
const Calendar = sequelize.define('Calendar', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    theme: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// Exporter le modèle Calendar
module.exports = { Calendar, sequelize };
