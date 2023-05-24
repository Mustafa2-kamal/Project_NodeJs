

const User = require('../models/user.js');

const handleGetUsers = async (req, res) => {

    console.log('llkhgfd');

    const found = await User.find({role: 'Basic'}).exec();

    if (!found) return res.status(404).json({ message: "No Users" });

    res.status(200).send(found);

}

module.exports = { handleGetUsers };