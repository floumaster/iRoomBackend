const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Floors extends Sequelize.Model {};

Floors.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Floor id, text",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Floor name, string",
    },
    number: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Floor number, string",
    },
}, { sequelize, modelName: 'floors', tableName: 'floors', timestamps: false })

module.exports = Floors;


