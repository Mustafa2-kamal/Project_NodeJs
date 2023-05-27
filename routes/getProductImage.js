const express = require('express');
const router = express.Router();
const image = require('../controllers/getProductImage.js');

router.get('/:productId', image.handleGetImage);

module.exports = router;