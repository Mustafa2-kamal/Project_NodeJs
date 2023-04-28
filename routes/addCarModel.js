const express = require('express');
const router = express.Router();
const addCarModel= require('../controllers/addCarModel');

router.post('/', addCarModel.handleNewCarModel);

module.exports = router;