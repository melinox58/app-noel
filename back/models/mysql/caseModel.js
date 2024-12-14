const db = require('../../config/db-config.js');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config({ path: '../../.env' });
const Calendar = require('./calendarModel');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false // Désactive les colonnes createdAt et updatedAt
    }
});

const Case = sequelize.define('Case', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    day_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.JSON,
        allowNull: false
    },
    is_opened: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    calendars_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Calendars',
            key: 'id'
        }
    }
});

// Synchroniser le modèle avec la base de données
sequelize.sync().then(() => {
    console.log('La table Cases a bien été créée');
}).catch((error) => {
    console.error('Erreur lors de la création de la table Cases : ', error);
});

//On defini les associations entre Calendar et cases
// Case.belongsTo(Calendar, { foreignKey: 'calendars_id' });
// Calendar.hasMany(Case, { foreignKey: 'calendars_id' });

module.exports = Case;