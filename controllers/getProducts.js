

const Product = require('../models/product.js');

const handleGetProducts  = async (req, res) => {


    const found = await Product.find({}).exec();

    if (!found) return res.status(404).json({ message: "No products" });

    res.status(200).send(found);

}

module.exports = { handleGetProducts };