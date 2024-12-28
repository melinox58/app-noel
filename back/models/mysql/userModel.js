const db = require('../../config/db-config.js');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '../../.env' });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Le nom est requis'
            },
            len: [2, 50] // Le nom doit avoir entre 2 et 50 caractères
        }
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Le prénom est requis'
            },
            len: [2, 50] // Le prénom doit avoir entre 2 et 50 caractères
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'L\'email doit être une adresse email valide'
            },
            notEmpty: {
                msg: 'L\'email est requis'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Le mot de passe est requis'
            },
            len: [6, 100] // Le mot de passe doit avoir entre 6 et 100 caractères
        }
    },
    is_blocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

// Hook pour hacher le mot de passe avant de créer un nouvel utilisateur
User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

sequelize.sync({ alter: true }).then(() => {
    console.log('User table has been created, if one doesn\'t exist');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = User;