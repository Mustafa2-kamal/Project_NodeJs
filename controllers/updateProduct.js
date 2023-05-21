const Product = require('../models/product.js');


const handleUpdateProduct = async (req, res) => {

    console.log(req.body);

 
    try {
        console.log(req.params.productId);

        const result = await Product.findOneAndUpdate({_id:req.params.productId}, req.body,{new:true});
   

            if (!result ) {
                return res.status(404).send({message:"Not Found"});
            }
            result.save();
            // res.send(result);
           res.status(200).json({ 'success': `Product updated successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleUpdateProduct };