const User = require('../models/user.js');
const Service =require('../models/services.js')
const sharp=require('sharp');


const handleNewImage = async (req, res) => {

    console.log('kkkkkk');
    const email = req.params.userId;

    try {
        // const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
        //req.Trainer.image = buffer

            const foundUser = await User.findOne({ email: email})

    if (!foundUser) return res.status(404).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    // res.status(200).send(foundUser);

        res.status(200).json({ 'success': `  added successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewImage };