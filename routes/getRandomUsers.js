const express = require('express');
const router = express.Router();
const allusers = require('../controllers/getRandomUsers.js');

router.get('/', allusers.handleGetusers);

module.exports = router;