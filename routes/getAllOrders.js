const express = require('express');
const router = express.Router();
const allOrders = require('../controllers/getAllOrders.js');

router.get('/', allOrders.handleGetOrders);

module.exports = router;