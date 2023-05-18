const Order = require('../models/order.js');


const handleUpdateOrder = async (req, res) => {

    console.log(req.body);

 
    try {
        console.log(req.params.orderId);

        const result = await Order.findOneAndUpdate({_id:req.params.orderId}, req.body,{new:true});
   

            if (!result ) {
                return res.status(404).send({message:"Not Found"});
            }
            result.save();
            // res.send(result);
           res.status(200).json({ 'success': `Order updated successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleUpdateOrder };