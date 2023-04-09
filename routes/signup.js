const express = require('express');
const router = express.Router();
const signup = require('../controllers/signup');

router.post('/', signup.handleNewUser);

module.exports = router;