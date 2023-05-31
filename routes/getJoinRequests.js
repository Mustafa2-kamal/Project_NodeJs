const express = require('express');
const router = express.Router();
const alljoins = require('../controllers/getJoinRequests.js');

router.get('/', alljoins.handleGetjoins);

module.exports = router;