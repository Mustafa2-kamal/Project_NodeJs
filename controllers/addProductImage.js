const Product = require('../models/product.js');

const sharp=require('sharp');


const handleNewImage = async (req, res) => {

    console.log('kkkkkk');
    const id = req.params.productId;
    console.log(id);

    try {
        
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
        // const user=await User.find({email});
    //    user.imageUrl=buffer;

        console.log(buffer);

    const result = await Product.findOneAndUpdate({_id:id}, {imageUrl:buffer},{new:true});
   

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