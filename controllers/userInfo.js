
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

const sendEmail = require('../controllers/sendEmail');



const handleUserInfo = async (req, res) => {
    // const user = req.body.username;
    const email = req.params.userId;

    console.log(email);

    const foundUser = await User.findOne({ email: email })

    if (!foundUser) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    res.status(200).send(foundUser);


}

module.exports = { handleUserInfo };