const User = require('../models/user.js');
const bcrypt = require('bcrypt');

const handleResetPassword = async (req, res) => {


    // const user = req.body.username;
    //const email = req.body.email;
   
    const newPassword = req.body.newPassword;

    console.log(newPassword);
    const email = req.params.userId;



    const foundUser = await User.findOne({ email: email });
   // res.status(200).json({message: 'kkkkkkkkk'});

    if (!foundUser) return res.status(404).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 


        try {
            const hashedPwd = await bcrypt.hash(newPassword, 8);
            const result = await User.findOneAndUpdate({ email: req.params.userId }, {password:hashedPwd}, { new: true });

            if (!result) {
                return res.status(404).send({ message: "Not Found" });
            }

            result.save();
            // res.send(result);
            res.status(200).json({ 'success': `Password updated successfully ` });
        } catch (err) {
            res.status(500).json({ 'message': err.message });
        }

   

}

module.exports = { handleResetPassword };