const { Sequelize } = require('sequelize');
const sequelize = require('../utils/sequallize')

class Users extends Sequelize.Model {};

Users.init({
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        unique: true,
        comment: "Users id, text",
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Users name, string",
    },
    surname: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Users surname, string",
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Users email, string",
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Users password, string",
    },
    teamId: {
        type: Sequelize.TEXT,
        allowNull: true,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Users teamId, string",
    },
    isAdmin: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        unique: false,
        comment: "Is user admin, string",
    },
}, { sequelize, modelName: 'users', tableName: 'users', timestamps: false })

module.exports = Users;


