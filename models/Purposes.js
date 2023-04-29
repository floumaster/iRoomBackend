const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Purposes extends Sequelize.Model {};

Purposes.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Purpose id, text",
    },
    value: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Purpose name, string",
    },
}, { sequelize, modelName: 'purposes', tableName: 'purposes', timestamps: false })

module.exports = Purposes;


