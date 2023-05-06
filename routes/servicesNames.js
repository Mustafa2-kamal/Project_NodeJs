const express = require('express');
const router = express.Router();
const allServices = require('../controllers/servicesNames');

router.get('/', allServices.handleGetAllServices);

module.exports = router;