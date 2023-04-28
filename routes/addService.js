const express = require('express');
const router = express.Router();
const addService= require('../controllers/addService');

router.post('/', addService.handleNewService);

module.exports = router;