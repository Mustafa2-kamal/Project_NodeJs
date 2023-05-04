const User = require('../models/user.js');
const Service =require('../models/services.js')
const sharp=require('sharp');


const handleNewImage = async (req, res) => {

    console.log('kkkkkk');
    const email = req.params.userId;

    try {
        
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
        //req.Trainer.image = buffer
        console.log(buffer);

    const result = await User.findOneAndUpdate({email:email}, {imageUrl:buffer},{new:true});
   

    if (!result ) {
        return res.status(404).send({message:"Not Found"});
    }

    result.save();
    // res.send(result);
   res.status(200).json({ 'success': `Profile image updated successfully` });

    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewImage };