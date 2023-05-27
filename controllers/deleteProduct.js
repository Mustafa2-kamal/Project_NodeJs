
const Product = require('../models/product.js');

const handleRemoveProduct  = async (req, res) => {

    console.log(req.params.productId);

    const id=req.params.productId;//email

    const found = await Product.deleteOne({_id:id});

    if (!found) return res.status(404).json({ message: "No Product with that email" });

    res.status(200).json({ message: "Product removed successfully" });

}

module.exports = { handleRemoveProduct };