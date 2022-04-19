const express = require('express');
const router = express.Router();

const { getPart } = require('../controllers/parts');


router.get('/:id', getPart);

module.exports = router;