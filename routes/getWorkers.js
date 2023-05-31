const express = require('express');
const router = express.Router();
const workers = require('../controllers/getWorkers');

router.get('/:serviceName/:carModel', workers.handleGetWorkers);

module.exports = router;