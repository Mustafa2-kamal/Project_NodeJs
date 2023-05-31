

const User = require('../models/user.js');

const handleGetWorkers = async (req, res) => {


    const found = await User.find({ role: 'worker'}).exec();

    if (!found) return res.status(404).json({ message: "No workers" });

    res.status(200).send(found);

}

module.exports = { handleGetWorkers };