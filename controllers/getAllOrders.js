
const Order = require('../models/order.js');

const handleGetOrders = async (req, res) => {


    let foundOrder='';

    foundOrder = await Order.find({}).exec();

    //console.log(foundOrder);

    if (!foundOrder) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    res.status(200).send(foundOrder);


}

module.exports = { handleGetOrders };