const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Teams extends Sequelize.Model {};

Teams.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Team id, text",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Team name, string",
    },
    color: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Team color, string",
    },
}, { sequelize, modelName: 'teams', tableName: 'teams', timestamps: false })

module.exports = Teams;


