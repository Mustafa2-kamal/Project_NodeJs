const express = require('express');
const router = express.Router();
const path=require('path');

const addImage= require('../controllers/addImage');

const multer = require('multer');

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,__dirname+"/uploads/images");
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload=multer({storage:storage});

// const upload=multer();

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

router.post('/:userId',upload.single('image'),  addImage.handleNewImage);


module.exports = router;