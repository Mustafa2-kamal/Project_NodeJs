const express = require('express');
const router = express.Router();
const allOrders = require('../controllers/getUserOrders.js');

router.get('/:userId', allOrders.handleGetUserOrders);

module.exports = router;