const express = require('express');
const router = express.Router();
const rate = require('../controllers/rateWorker.js');

router.patch('/:userId', rate.handleRateUser);

module.exports = router;