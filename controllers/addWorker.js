const User = require('../models/user.js');

const handleAddWorker = async (req, res) => {

    console.log(req.body)
 

    try {
        console.log(req.params.userId);

        const result = await User.findOneAndUpdate({email:req.params.userId}, req.body,{new:true});
   

            if (!result ) {
                return res.status(404).send({message:"Not Found"});
            }

            result.save();
            // res.send(result);
           res.status(200).json({ success: `Joined successfully, welcome to our team` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleAddWorker };