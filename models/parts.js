const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');

const Parts = sequelize.define('parts',{
    Assemby_Part: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    description: {
        type: DataTypes.STRING
    },
    _Precio_Lista_OOW: {
        type: DataTypes.DOUBLE
    },
    _Core_Price_Normal_Compra: {
        type: DataTypes.DOUBLE
    },
    _Core_Price_Battery_Compra: {
        type: DataTypes.DOUBLE
    },
    _Core_Price_Display_Compra: {
        type: DataTypes.DOUBLE
    },
    _Precio_Stocking_Sin_Orden_en_GSX: {
        type: DataTypes.DOUBLE
    }
});

module.exports = Parts;