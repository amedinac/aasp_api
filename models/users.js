const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    'users',
    {   
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        dept: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    }
);

User.find = User.findAll;
User.findById = User.findByPk;

module.exports = User;