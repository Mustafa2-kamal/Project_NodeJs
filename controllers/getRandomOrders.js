
const order =require('../models/order.js')


const handleGetorders = async (req, res) => {

     const orders = await order.aggregate([{$sample:{size:5}}]);

    if (!orders) return res.status(404).send("message:No orders");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

//    console.log(foundorder[0].orderName);
    res.status(200).send(orders)

}

module.exports = { handleGetorders };