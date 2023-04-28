const express = require('express');
const router = express.Router();
const userInfo = require('../controllers/userInfo');

const jwt = require('jsonwebtoken');
const JWT_SECRET ="pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const verifyUserToken = (req, res, next) => {

    console.log(req.headers);
    if (!req.headers.authorization) {
      return res.status(401).send("Unauthorized request");
    }
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.status(401).send("Access denied. No token provided.");
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(400).send("Invalid token.");
    }
  };


//path start with /userInfo/:userid
router.get('/:userId',verifyUserToken, userInfo.handleUserInfo);

module.exports = router;