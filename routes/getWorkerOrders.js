const express = require('express');
const router = express.Router();
const allOrders = require('../controllers/getWorkerOrders.js');

router.get('/:userId', allOrders.handleGetWorkerOrders);

module.exports = router;