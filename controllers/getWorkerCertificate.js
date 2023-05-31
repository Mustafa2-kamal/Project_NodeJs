

const join = require('../models/join.js');

const handleGetImage = async (req, res) => {

    
    //  const name = req.body.serviceName;
     const id = req.params.id;


    const found = await join.find({ _id:id}).exec();


    if (!found) return res.status(404).json({ message: "No joins" });

    res.status(200).json({image:found[0].certificateImage.toString("base64")});

}

module.exports = { handleGetImage };