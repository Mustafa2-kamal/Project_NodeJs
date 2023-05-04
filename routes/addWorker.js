const express = require('express');
const router = express.Router();
const worker = require('../controllers/addWorker');

router.patch('/:userId', worker.handleAddWorker);

module.exports = router;