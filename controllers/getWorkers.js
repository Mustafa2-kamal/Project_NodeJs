

const User = require('../models/user.js');

const handleGetWorkers = async (req, res) => {

    
     const name = req.body.serviceName;

    const found = await User.find({ role: 'worker', major:name});


    if (!found) return res.status(404).json({ message: "No workers" });

    res.status(200).send(found);

}

module.exports = { handleGetWorkers };