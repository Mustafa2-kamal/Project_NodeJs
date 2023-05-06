const express = require('express');
const router = express.Router();
const worker = require('../controllers/addWorker');

router.post('/:userId', worker.handleAddWorker);

module.exports = router;