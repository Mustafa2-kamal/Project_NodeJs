
const Order = require('../models/order.js');

const handleGetUserOrders = async (req, res) => {
    // const Order = req.body.Ordername;
    const email = req.params.userId;


    console.log(email);
    let foundOrder='';

    foundOrder = await Order.find({ userEmail: email }).exec();

    //console.log(foundOrder);

    if (!foundOrder) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    res.status(200).send(foundOrder);


}

module.exports = { handleGetUserOrders };