const express = require('express');
const router = express.Router();
const send = require('../controllers/sendEmail');

router.post('/', send.sendEmail);

module.exports = router;