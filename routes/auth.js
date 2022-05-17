const express = require('express');
const { loginCtrl, registerCtrl } = require('../controllers/auth');
const router = express.Router();
// const { validatorRegister, validatorLogin } = require('../validators/auth'); -> Falta validar data

router.post("/register", registerCtrl);

router.post("/login", loginCtrl);

module.exports = router;