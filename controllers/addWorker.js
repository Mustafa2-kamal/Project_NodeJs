const User = require('../models/user.js');
const join = require('../models/join.js');

const handleAddWorker = async (req, res) => {

    console.log(req.body);

    const joinId=req.params.joinId;

 

    try {
        console.log(req.params.userId);


        const found = await join.deleteOne({_id:joinId});
    
       // res.status(200).json({ message: "Product removed successfully" });

       if(role=='worker'){

        const result = await User.findOneAndUpdate({email:req.params.userId}, req.body,{new:true});
   
            if (!result || !found) {
                return res.status(404).send({message:"Not Found"});
            }

            result.save();
            // res.send(result);
           res.status(200).json({ success: `Joined successfully, welcome to our team` });
        }
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }

    
}

module.exports = { handleAddWorker };