const express = require('express');
const router = express.Router();
const RemainTime = require('../controllers/getRemainTime.js');

router.get('/:orderId', RemainTime.handleGetRemainTime);

module.exports = router;