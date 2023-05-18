const express = require('express');
const router = express.Router();
const updateOrder = require('../controllers/updateOrder.js');

router.patch('/:orderId', updateOrder.handleUpdateOrder);

module.exports = router;