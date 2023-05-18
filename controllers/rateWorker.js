const User = require('../models/user.js');
const bcrypt = require('bcrypt');

const handleRateUser = async (req, res) => {

    console.log(req.body)
 
     const newRate =Number(req.body.rating);
    // const email = req.body.email;
    // const pwd = req.body.password;

     const email = req.params.userId;

    // console.log(email);

     const foundUser = await User.findOne({ email: email});

     if (!foundUser) return res.status(404).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

     let r=foundUser.rating;
     let avg=(r+newRate)/2;
     let rounded=avg.toFixed(1);
    //  console.log(rounded);
    //  console.log(avg);
    
    try {
        console.log(req.params.userId);

        const result = await User.findOneAndUpdate({email:req.params.userId}, {rating:rounded},{new:true});
   

            if (!result ) {
                return res.status(404).send({message:"Not Found"});
            }

            result.save();
            // res.send(result);
           res.status(200).json({ 'success': `user updated successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleRateUser  };