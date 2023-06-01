const Order = require('../models/order.js');
const User = require('../models/user');



const handleUpdateOrder = async (req, res) => {


    const status=req.body.status2;
    const email=req.body.email;
    const estimatedTime=req.body.estimatedTime;


 
    try {
     
        if(status=='working') {
            const found = await User.findOne({ email:email, role: 'worker',});

            let date=found.availableTime;
            let newDate=new Date();

            console.log(date+'kkkk');

            console.log(newDate);

            if(newDate>date){


                console.log(newDate);
                console.log(newDate.getTime());


                const endingDate = new Date(newDate.getTime() + estimatedTime * 60 * 60 * 1000);


                // const result = await Order.findOneAndUpdate({_id:req.params.orderId}, {
                //     startingTime:newDate,endingTime:endingDate
                // },{new:true});


                const result2 = await user.findOneAndUpdate({role: 'worker',email:email}, {
                    availableTime:endingDate
                },{new:true});

                result.save();
                result2.save();



            }
            else{

                const endingDate = new Date(date.getTime() + estimatedTime * 60 * 60 * 1000);

                // const result = await Order.findOneAndUpdate({_id:req.params.orderId}, {
                //     startingTime:date,endingTime:endingDate
                // },{new:true});


                const result2 = await user.findOneAndUpdate({role: 'worker',email:email}, {
                    availableTime:endingDate
                },{new:true});

                result.save();
                result2.save();

            }

        }


        // const result = await Order.findOneAndUpdate({_id:req.params.orderId}, req.body,{new:true});
   

        //     if (!result ) {
        //         return res.status(404).send({message:"Not Found"});
        //     }
        //     result.save();
        //     // res.send(result);
        //    res.status(200).json({ 'success': `Order updated successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleUpdateOrder };