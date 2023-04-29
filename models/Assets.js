const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Assets extends Sequelize.Model {};

Assets.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Asset id, text",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Asset name, string",
    },
}, { sequelize, modelName: 'assets', tableName: 'assets', timestamps: false })

module.exports = Assets;


