const express = require('express');
const router = express.Router();
const updateUser = require('../controllers/updateUser');

router.patch('/:userId', updateUser.handleUpdateUser);

module.exports = router;