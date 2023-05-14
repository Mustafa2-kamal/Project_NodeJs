
const Product =require('../models/product.js')

const handleNewProduct = async (req, res) => {

    console.log(req.body)
    const { name,brand,type,price,quantity} = req.body;
   

   // check for duplicate usernames in the db
    const isProductExist = await Product.findOne({ name: name, brand:brand}).exec();
    if (isProductExist) return res.status(409).json({ 'message': `This Product is already exist. ` }); //Conflict 

    try {

        //create and store the new user
        const result = await Product.create({ 
            "name": name,
            "brand": brand,
            "type": type,
            "price": price,
            "quantity":quantity
        });

        console.log(result);

        res.status(200).json({ 'success': ` the Product added successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewProduct };