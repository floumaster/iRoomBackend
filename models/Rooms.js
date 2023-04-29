const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Rooms extends Sequelize.Model {};

Rooms.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Room id, string",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Room name, string",
    },
    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Room capacity, int",
    },
    floorId: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Room floorId, int",
    }
}, { sequelize, modelName: 'rooms', tableName: 'rooms', timestamps: false })

module.exports = Rooms;


