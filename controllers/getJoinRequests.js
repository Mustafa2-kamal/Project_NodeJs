
const join = require('../models/join.js');

const handleGetjoins = async (req, res) => {


    let foundjoin='';

    foundjoin = await join.find({}).exec();

    //console.log(foundjoin);

    if (!foundjoin) return res.status(401).send("message:The email is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

    res.status(200).send(foundjoin);


}

module.exports = { handleGetjoins };