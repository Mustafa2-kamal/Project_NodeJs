const Order = require('../models/order.js');



const handleGetRemainTime = async (req, res) => {


    const status=req.body.status2;



    try {
     
 
        if(status=='working'){

            let newDate=new Date();
    

                const found = await Order.findOne({_id:req.params.orderId});


                const remainingTime = found.endingTime.getTime() - newDate.getTime();

                if(remainingTime<0){
                    remainingTime=0;
                }


                const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));

                const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));


                const result = await Order.findOneAndUpdate({_id:req.params.orderId}, {
                    remainTime:remainingHours+'h:'+remainingMinutes+'m'
                },{new:true});

                result.save();
                res.status(200).json({time:remainingHours+'h:'+remainingMinutes+'m'});
            }

    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleGetRemainTime };