const express = require('express');
const router = express.Router();
const user = require('../controllers/deleteUser.js');

router.delete('/:userId', user.handleRemoveUser);

module.exports = router;