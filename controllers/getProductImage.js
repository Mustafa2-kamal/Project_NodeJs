

const Product = require('../models/product.js');

const handleGetImage = async (req, res) => {

    
    //  const name = req.body.serviceName;
     const id = req.params.productId;


    const found = await Product.find({ _id:id}).exec();


    if (!found) return res.status(404).json({ message: "No products" });

    res.status(200).json({image:found[0].imageUrl.toString("base64")});

}

module.exports = { handleGetImage };