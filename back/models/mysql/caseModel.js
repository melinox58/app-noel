const { Sequelize, DataTypes } = require('sequelize');
const { Calendar, sequelize } = require('./calendarModel'); // Importer Calendar et sequelize de manière correcte

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

// Association un-à-plusieurs entre Calendar et Case
Calendar.hasMany(Case, { foreignKey: 'calendars_id' });
Case.belongsTo(Calendar, { foreignKey: 'calendars_id' });

module.exports = { Case };
