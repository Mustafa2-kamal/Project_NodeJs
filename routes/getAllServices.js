const express = require('express');
const router = express.Router();
const allServices = require('../controllers/getAllServices');

router.get('/', allServices.handleGetAllServices);

module.exports = router;