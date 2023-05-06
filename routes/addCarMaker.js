const express = require('express');
const router = express.Router();
const addCarMaker= require('../controllers/addCarMaker');

router.post('/', addCarMaker.handleNewCarMaker);

module.exports = router;