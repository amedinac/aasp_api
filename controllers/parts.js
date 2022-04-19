const { matchedData } = require('express-validator');
const { partsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const getPart = async (req, res) => {
    try{
        //req = matchedData(req);
        const { id } = req;
        const data = await partsModel.findById(id);
        res.send({data});
    }catch(e){
        handleHttpError(res, 'ERROR_GET_PART');
    }
}

module.exports = { getPart };