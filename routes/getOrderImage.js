const express = require('express');
const router = express.Router();
const image = require('../controllers/getOrderImage.js');

router.get('/:orderId', image.handleGetImage);

module.exports = router;