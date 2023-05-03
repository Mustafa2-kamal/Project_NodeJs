const express = require('express');
const router = express.Router();
const updateLocation = require('../controllers/updateLocation');

router.patch('/:userId', updateLocation.handleUpdateLocation);

module.exports = router;