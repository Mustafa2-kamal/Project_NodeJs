

const order = require('../models/order.js');

const handleGetImage = async (req, res) => {

    
    //  const name = req.body.serviceName;
     const id = req.params.orderId;


    const found = await order.find({ _id:id}).exec();


    if (!found) return res.status(404).json({ message: "No orders" });

    res.status(200).json({image:found[0].imageUrl.toString("base64")});

}

module.exports = { handleGetImage };