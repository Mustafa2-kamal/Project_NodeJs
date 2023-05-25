const express = require('express');
const router = express.Router();
const send = require('../controllers/sendEmail');

router.get('/:token/:userId', send.handlSendEmail);

module.exports = router;  