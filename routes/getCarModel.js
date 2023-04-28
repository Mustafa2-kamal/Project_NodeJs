const express = require('express');
const router = express.Router();
const allModels = require('../controllers/getCarModel');

router.get('/', allModels.handleGetAllCarModels);

module.exports = router;