const express = require('express');
const router = express.Router();
const allServices = require('../controllers/getRandomServices');

router.get('/', allServices.handleGetServices);

module.exports = router;