const db = require('../../config/db-config.js');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config({ path: '../../.env' });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false // Désactive les colonnes createdAt et updatedAt
    }
});


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
    }
});

// Fonction pour créer un calendrier avec un thème
const createCalendarWithTheme = async (userId, title, themePath) => {
    try {
        const newCalendar = await Calendar.create({
            user_id: userId,
            title: title,
            theme: themePath
        });
        console.log('Calendrier créé avec succès:', newCalendar.toJSON());
        return newCalendar;
    } catch (error) {
        console.error('Erreur lors de la création du calendrier:', error);
        throw error;
    }
};
sequelize.sync({ alter: true }).then(() => {
    console.log('Le Calendrier a bien été crée');
}).catch((error) => {
    console.error('Une erreur est survenue : ', error);
});

module.exports = {
    Calendar,
    createCalendarWithTheme
} ;