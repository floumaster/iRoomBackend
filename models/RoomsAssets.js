const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class RoomsAssets extends Sequelize.Model {};

RoomsAssets.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        comment: "RoomsAssets id, text",
    },
    room_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "RoomsAssets room id, string",
    },
    asset_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "RoomsAssets asset id, string",
    },
}, { sequelize, modelName: 'rooms_assets', tableName: 'rooms_assets', timestamps: false })

module.exports = RoomsAssets;


