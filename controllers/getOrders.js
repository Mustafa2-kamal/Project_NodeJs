
const Order = require('../models/order.js');

const handleGetOrders = async (req, res) => {
    // const Order = req.body.Ordername;
    const email = req.params.userId;
    const role = req.params.role;

    console.log(email);
    const foundOrder='';

    if(role=='Basic'){
        foundOrder = await Order.findOne({ Order: email })
    }
    else if(role=='worker'){
       foundOrder = await Order.findOne({ worker: email })
    }

    if (!foundOrder) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    res.status(200).send(foundOrder);


}

module.exports = { handleGetOrders };