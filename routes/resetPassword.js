const express = require('express');
const router = express.Router();
const reset = require('../controllers/resetPassword');

router.get('/:token/:userId', reset.handleResetPassword);

module.exports = router;