

const User = require('../models/user.js');

const handleGetWorkers = async (req, res) => {

    
    //  const name = req.body.serviceName;
     const service = req.params.serviceName;
     console.log(service);

    const found = await User.find({ role: 'worker', major:service}).exec();


    if (!found) return res.status(404).json({ message: "No workers" });

    res.status(200).send(found);

}

module.exports = { handleGetWorkers };