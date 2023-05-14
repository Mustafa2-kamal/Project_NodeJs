const express = require('express');
const router = express.Router();
const allOrders = require('../controllers/getOrders.js');

router.get('/:userId/:role', allOrders.handleGetOrders);

module.exports = router;