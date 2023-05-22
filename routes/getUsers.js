
const express = require('express');
const router = express.Router();
const users = require('../controllers/getUsers.js');

router.get('/', users.handleGetUsers);

module.exports = router;