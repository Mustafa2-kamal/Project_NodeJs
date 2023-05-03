
const Service =require('../models/services.js')


const handleGetServices = async (req, res) => {
    // const user = req.body.username;
    // const email = req.params.userId;
    // console.log(email);

    // const foundUser = await Service.find({});
     const services = await Service.aggregate([{$sample:{size:5}}]);
    // console.log(foundUser2);


    if (!services) return res.status(401).send("message:No Services");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

//    console.log(foundUser[0].serviceName);
    res.status(200).send(services)

}

module.exports = { handleGetServices };