const express = require('express');
const router = express.Router();
const workers = require('../controllers/topWorkers.js');

router.get('/:carModel', workers.handleGetTopWorkers);

module.exports = router;