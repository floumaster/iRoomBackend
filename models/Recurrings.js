const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Recurrings extends Sequelize.Model {};

Recurrings.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Recurring id, text",
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Recurring title, string",
    },
    value: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Recurring value, string",
    },
}, { sequelize, modelName: 'recurrings', tableName: 'recurrings', timestamps: false })

module.exports = Recurrings;


