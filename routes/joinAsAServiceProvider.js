const express = require('express');
const router = express.Router();
const join= require('../controllers/joinAsAServiceProvider.js');

router.post('/', join.handleNewjoin);

module.exports = router;