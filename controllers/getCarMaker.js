
const { json } = require('express');
const carMaker = require('../models/carMaker.js')


const handleGetAllCarMakers = async (req, res) => {

    const found = await carMaker.find().select('carMaker -_id');


    if (!found) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    //    console.log(foundUser[0].serviceName);
    let results = [];
    found.forEach(function (carMdl) {
        results.push(carMdl.carMaker);
    });
    //console.log(results);
    res.status(200).send(results);

}

module.exports = { handleGetAllCarMakers };