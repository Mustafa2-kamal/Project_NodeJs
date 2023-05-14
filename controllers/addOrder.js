
const Order =require('../models/order.js')

const handleNewOrder = async (req, res) => {

    console.log(req.body)
    const { user,worker,serviceName,note,status} = req.body;
   

    try {

        //create and store the new order
        const result = await Order.create({ 
            "user": user,
            "worker": worker,
            "serviceName": serviceName,
            "note": note,
            "status":status
        });

        res.status(200).json({ 'success': ` the Order added successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewOrder };