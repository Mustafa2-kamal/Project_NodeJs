const express = require('express');
const router = express.Router();
const image = require('../controllers/getWorkerCertificate.js');

router.get('/:id', image.handleGetImage);

module.exports = router;