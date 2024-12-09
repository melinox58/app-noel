// const db = require('../../config/db-config.js');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = new Sequelize('melinox_noel', 'melinox_noel', 'salutnoel', {
    host: 'mysql-melinox.alwaysdata.net',
    dialect: 'mysql',
    define: {
        timestamps: false // Désactive les colonnes createdAt et updatedAt
    }
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

// Hook pour hacher le mot de passe avant de créer un nouvel utilisateur
User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

sequelize.sync().then(() => {
    console.log('User table has been created, if one doesn\'t exist');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = User;