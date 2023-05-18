const express = require('express');
const router = express.Router();
const workers = require('../controllers/topWorkers.js');

router.get('/', workers.handleGetTopWorkers);

module.exports = router;