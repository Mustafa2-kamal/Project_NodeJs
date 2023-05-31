
const Order =require('../models/order.js')

const handleNewOrder = async (req, res) => {

    console.log('hhhhhhh');

    console.log(req.body);
    const { userEmail,userName,workerEmail,workerName,serviceName,note,status,city,street,carModel} = req.body;
   

    try {

        //create and store the new order
        const result = await Order.create({ 
            "userEmail": userEmail,
            "userName": userName,
            "carModel":carModel,
            "workerEmail": workerEmail,
            "workerName": workerName,
            "serviceName": serviceName,
            "note": note,
            "status":status,
            "city":city,
            "street":street,
            
        });

        console.log(result._id);

        res.status(200).json({ 'success': ` the Order added successfully`,id:result._id  });


    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewOrder };