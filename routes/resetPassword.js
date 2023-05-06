const express = require('express');
const router = express.Router();
const reset = require('../controllers/resetPassword');

router.get('/:userId', reset.handleResetPassword);

module.exports = router;