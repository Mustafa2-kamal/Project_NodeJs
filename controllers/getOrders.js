
const Order = require('../models/order.js');

const handleGetOrders = async (req, res) => {
    // const Order = req.body.Ordername;
    const email = req.params.userId;
    const role = req.params.role;

    console.log(role);

    console.log(email);
    let foundOrder='';

    if(role=='Basic'){
        foundOrder = await Order.findOne({ user: email }) 
    }
    else if(role=='worker'){
       foundOrder = await Order.findOne({ worker: email })
    }

    console.log(foundOrder);

    if (!foundOrder) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    res.status(200).send(foundOrder);


}

module.exports = { handleGetOrders };