const express = require('express');
const router = express.Router();
const  ResetPassword  = require('../controllers/confirmResetPassword');

router.post('/:userId',  ResetPassword.handleResetPassword);

module.exports = router;