
const order =require('../models/order.js')


const handleGetorders = async (req, res) => {

    const orders = await order.find({});

    let ordercount=orders.length;

const recentOrders = await order.find({}).skip(ordercount - 4);

    if (!orders) return res.status(404).send("message:No orders");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

//    console.log(foundorder[0].orderName);
    res.status(200).send(recentOrders)

}

module.exports = { handleGetorders };