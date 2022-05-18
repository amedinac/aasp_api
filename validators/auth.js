const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatorRegister = [
    check('first_name').exists().notEmpty(),
    check('last_name').exists().notEmpty(),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:3, max:99}),
    check('dept').exists().notEmpty(),

    (req, res, next) => {
        return validateResult(req, res, next);
    }
];


const validatorLogin = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:3, max:99}),

    (req, res, next) => {
        return validateResult(req, res, next);
    }
];

module.exports = { validatorRegister, validatorLogin};