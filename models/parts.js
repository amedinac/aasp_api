const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Parts = sequelize.define('parts',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
    },
    part_number: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    list_price: {
        type: DataTypes.DOUBLE
    },
    core_price: {
        type: DataTypes.DOUBLE
    },
    core_batt_price: {
        type: DataTypes.DOUBLE
    },
    oow_price: {
        type: DataTypes.DOUBLE
    }
});

module.exports = Parts;