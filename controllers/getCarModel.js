
const { json } = require('express');
const carModel = require('../models/carModel.js')


const handleGetAllCarModels = async (req, res) => {

    const foundUser = await carModel.find().select('carModel -_id');


    if (!foundUser) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    //    console.log(foundUser[0].serviceName);
    let results = [];
    foundUser.forEach(function (carMdl) {
        results.push(carMdl.carModel);
    });
    //console.log(results);
    res.status(200).send(results);

}

module.exports = { handleGetAllCarModels };