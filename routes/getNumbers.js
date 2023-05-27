const express = require('express');
const router = express.Router();
const number = require('../controllers/getNumbers.js');

router.get('/', number.handleGetUsers);

module.exports = router;