const express = require('express');
const router = express.Router();
const allusers = require('../controllers/getRecentUsers.js');

router.get('/', allusers.handleGetusers);

module.exports = router;