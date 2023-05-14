const express = require('express');
const router = express.Router();
const Order= require('../controllers/addOrder.js');

router.post('/', Order.handleNewOrder);

module.exports = router;