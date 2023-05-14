const express = require('express');
const router = express.Router();
const allProducts = require('../controllers/getProducts.js');

router.get('/', allProducts.handleGetProducts);

module.exports = router;