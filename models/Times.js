const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Times extends Sequelize.Model {};

Times.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Time id, text",
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Time title, string",
    },
    time: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Time, string",
    },
}, { sequelize, modelName: 'times', tableName: 'times', timestamps: false })

module.exports = Times;


