const { matchedData } = require('express-validator');
const { partsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const getPart = async (req, res) => {
    try{
        req = matchedData(req);
        const { id } = req;
        const data = await partsModel.findByPk(id);
        console.log('Hallo');
        res.send({data});
    }catch(e){
        handleHttpError(res, 'ERROR_GET_PART');
    }
}

const getParts = async (req, res) => {
    try{
        const data = await partsModel.findAllData({});
        console.log('Hallo');
        res.send({data});
    }catch(e){
        handleHttpError(res, 'ERROR_GET_PARTS');
    }
}

module.exports = { getPart, getParts};