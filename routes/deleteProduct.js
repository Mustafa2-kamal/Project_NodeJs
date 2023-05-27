const express = require('express');
const router = express.Router();
const Product = require('../controllers/deleteProduct.js');

router.delete('/:productId', Product.handleRemoveProduct);

module.exports = router;