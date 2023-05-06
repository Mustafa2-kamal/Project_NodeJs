
const carMakerdb =require('../models/carMaker.js')

const handleNewCarMaker = async (req, res) => {

    console.log(req.body)
    const { carMaker} = req.body;
   

    const isExist = await carMakerdb.findOne({ carMaker: carMaker }).exec();
    if (isExist) return res.status(409).json({ 'message': `This service: ${carMaker} is already exist. ` }); //Conflict 

    try {

        //create and store the new user
        const result = await carMakerdb.create({ 
            "carMaker": carMaker
        });

        console.log(result);

        res.status(200).json({ 'success': ` the carModel ${carMaker} added successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {handleNewCarMaker  };