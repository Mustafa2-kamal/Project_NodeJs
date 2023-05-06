const express = require('express');
const router = express.Router();
const image = require('../controllers/getImage');

router.get('/:userId', image.handleGetImage);

module.exports = router;