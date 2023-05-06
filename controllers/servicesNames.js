
const Service = require('../models/services.js')


const handleGetAllServices = async (req, res) => {


    const found = await Service.find({});
    //   const found = await Service.aggregate([{$sample:{size:1}}]);
    // console.log(foundUser2);


    if (!found) return res.status(401).send("message:No Services");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    //    console.log(foundUser[0].serviceName);
    let results = [];
    found.forEach(function (service) {
        results.push(service.serviceName);
    });

    res.status(200).send(results)

}

module.exports = { handleGetAllServices };