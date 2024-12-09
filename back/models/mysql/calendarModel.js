const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('melinox_noel', 'melinox_noel', 'salutnoel', {
    host: 'mysql-melinox.alwaysdata.net',
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

sequelize.sync().then(() => {
    console.log('Le Calendrier a bien été crée');
}).catch((error) => {
    console.error('Une erreur est survenue : ', error);
});

module.exports = Calendar;