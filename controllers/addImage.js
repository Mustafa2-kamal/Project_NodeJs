const User = require('../models/user.js');
const Service =require('../models/services.js')
const sharp=require('sharp');


const handleNewImage = async (req, res) => {

    console.log('kkkkkk');

    try {
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
        //req.Trainer.image = buffer

        res.status(200).json({ 'success': `  added successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewImage };