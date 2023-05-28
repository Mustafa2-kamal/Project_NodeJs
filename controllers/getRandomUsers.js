
const user =require('../models/user.js')


const handleGetusers = async (req, res) => {

     const users = await user.aggregate([{ $match: {role:'Basic'}},{$sample:{size:3}}]);

    if (!users) return res.status(404).send("message:No users");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

//    console.log(foundUser[0].userName);

    res.status(200).send(users)

}

module.exports = { handleGetusers };