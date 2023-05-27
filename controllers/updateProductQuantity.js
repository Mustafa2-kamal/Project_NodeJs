const Product = require('../models/product.js');


const handleUpdateProduct = async (req, res) => {

    console.log(req.body);

    const id=req.params.productId;

 
    try {
    

        const found = await Product.find({_id:id}).exec();

        let q=found[0].quantity;

        let newQ=q-req.body.quantity;


        const result = await Product.findOneAndUpdate({_id:id}, {quantity:newQ},{new:true});
   

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