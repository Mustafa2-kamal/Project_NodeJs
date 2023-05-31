const express = require('express');
const router = express.Router();
const path=require('path');

const addImage= require('../controllers/addWorkerCertificate.js');

const multer = require('multer');

const upload = multer({
    limits: {
        fileSize: 1000000
    },

 })

router.post('/:userId',upload.single('upload'),  addImage.handleNewImage);


module.exports = router;