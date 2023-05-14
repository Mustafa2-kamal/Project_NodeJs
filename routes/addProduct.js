const express = require('express');
const router = express.Router();
const Product= require('../controllers/addProducts.js');

router.post('/', Product.handleNewProduct);

module.exports = router;