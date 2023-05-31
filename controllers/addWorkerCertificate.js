const join = require('../models/join.js');

const sharp=require('sharp');


const handleNewImage = async (req, res) => {

    console.log('kkkkkk');
    const email = req.params.userId;//email
    console.log(email);

    try {
        
        const buffer = await sharp(req.file.buffer).resize({ wemailth: 250, height: 250 }).png().toBuffer();
        // const user=await User.find({email});
    //    user.imageUrl=buffer;

        console.log(buffer);

    const result = await join.findOneAndUpdate({workerEmail:email}, {certificateImage:buffer},{new:true});
   

    if (!result ) {
        return res.status(404).send({message:"Not Found"});
    }

    result.save();
    // res.send(result);
   res.status(200).json({ 'success': `certificate image added successfully` });

    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }


}

module.exports = { handleNewImage };