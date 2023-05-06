

const User = require('../models/user.js');

const handleGetImage = async (req, res) => {

    
    //  const name = req.body.serviceName;
     const email = req.params.userId;
     console.log(email);

    const found = await User.find({ email:email}).exec();


    if (!found) return res.status(404).json({ message: "No workers" });

    res.status(200).json({image:found.imageUrl});

}

module.exports = { handleGetImage };