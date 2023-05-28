
const Order = require('../models/order.js');

const handleGetUserOrders = async (req, res) => {
    // const Order = req.body.Ordername;
    const email = req.params.userId;


    console.log(email);
    let foundOrder='';

    foundOrder = await Order.find({ userEmail: email ,status:"Completed"}).exec();


    if (!foundOrder) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    foundOrder.sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
    });


    res.status(200).send(foundOrder);


}

module.exports = { handleGetUserOrders };