
const Product =require('../models/product.js')


const handleGetProducts = async (req, res) => {
    // const user = req.body.username;
    // const email = req.params.userId;
    // console.log(email);

    // const foundUser = await Product.find({});
     const Products = await Product.aggregate([{$sample:{size:5}}]);
    // console.log(foundUser2);


    if (!Products) return res.status(404).send("message:No Products");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

//    console.log(foundUser[0].ProductName);
    res.status(200).send(Products)

}

module.exports = { handleGetProducts };