const express = require('express');
const router = express.Router();

const { getPart, getParts } = require('../controllers/parts');

router.get('/:id', getPart);
router.get('/', getParts);

module.exports = router;