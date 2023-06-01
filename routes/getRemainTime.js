const express = require('express');
const router = express.Router();
const RemainTime = require('../controllers/getRemainTime.js');

router.get('/', RemainTime.handleGetRemainTime);

module.exports = router;