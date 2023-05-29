
const user =require('../models/user.js')


const handleGetusers = async (req, res) => {

    // const users = await user.aggregate([{ $match: {role:'Basic'}},{$sample:{size:3}}]);
     const users = await user.find({role:'Basic'});

     let usercount=users.length;

 const recentUsers = await user.find({role:'Basic'}).skip(usercount - 3);


    if (!users) return res.status(404).send("message:No users");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    res.status(200).send(recentUsers)

}

module.exports = { handleGetusers };