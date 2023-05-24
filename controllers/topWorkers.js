

const User = require('../models/user.js');

const handleGetTopWorkers = async (req, res) => {

    console.log('lllll');
    const found = await User.find({ role: 'worker'}).exec();


    if (!found) return res.status(404).json({ message: "No workers" });

    found.sort((a, b) => {
        return b.rating - a.rating;
    });

    res.status(200).send(found);

}

module.exports = { handleGetTopWorkers };