const express = require('express');
const router = express.Router();
const send = require('../controllers/sendEmail');

router.post('/:userId', send.handlSendEmail);

module.exports = router;