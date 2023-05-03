const express = require('express');
const router = express.Router();
const addImage= require('../controllers/addImage');

const multer = require('multer');
const upload=multer();

// const upload = multer({
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error('Please upload a valid image file'))
//         }
//         cb(undefined, true)
//     }
// })

router.post('/:userId', upload.single('upload'),  addImage.handleNewImage);

module.exports = router;