const express = require('express');
const router = express.Router();
const updateProduct = require('../controllers/updateProductQuantity.js');

router.patch('/:productId', updateProduct.handleUpdateProduct);

module.exports = router;