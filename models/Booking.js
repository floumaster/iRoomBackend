const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Bookings extends Sequelize.Model {};

Bookings.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Booking id, text",
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking title, string",
    },
    dates: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking dates, string",
    },
    timeStart: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking timeStart, string",
    },
    timeEnd: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking timeEnd, string",
    },
    userId: {
        type: Sequelize.TEXT,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking userId, string",
    },
    teamId: {
        type: Sequelize.TEXT,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking teamId, string",
    },
    roomId: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking roomId, string",
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking description, string",
    },
    purposeId: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Booking purposeId, string",
    },
}, { sequelize, modelName: 'booking', tableName: 'booking', timestamps: false })

module.exports = Bookings;


