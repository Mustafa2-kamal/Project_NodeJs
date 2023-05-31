const express = require('express');
const router = express.Router();
const workers = require('../controllers/getAllWorkers.js');

router.get('/', workers.handleGetWorkers);

module.exports = router;