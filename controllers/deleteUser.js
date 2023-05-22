
const User = require('../models/user.js');

const handleRemoveUser  = async (req, res) => {

    console.log(req.params.userId);

    const id=req.params.userId;//email

    const found = await User.deleteOne({email:id});

    if (!found) return res.status(404).json({ message: "No User with that email" });

    res.status(200).json({ message: "User removed successfully" });

}

module.exports = { handleRemoveUser };