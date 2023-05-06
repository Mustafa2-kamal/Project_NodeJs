const express = require('express');
const router = express.Router();
const allMakers = require('../controllers/getCarMaker');

router.get('/', allMakers.handleGetAllCarMakers);

module.exports = router;