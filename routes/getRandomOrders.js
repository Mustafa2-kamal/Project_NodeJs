const express = require('express');
const router = express.Router();
const allorders = require('../controllers/getRandomOrders.js');

router.get('/', allorders.handleGetorders);

module.exports = router;