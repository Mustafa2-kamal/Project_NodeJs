const express = require('express');
const router = express.Router();
const allProducts = require('../controllers/getRandomProduct');

router.get('/', allProducts.handleGetProducts);

module.exports = router;