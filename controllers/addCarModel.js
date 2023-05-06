
const carModeldb =require('../models/carModel.js')

const handleNewCarModel = async (req, res) => {

    console.log(req.body)
    const { carModel} = req.body;
   

    const isExist = await carModeldb.findOne({ carModel: carModel }).exec();
    if (isExist) return res.status(409).json({ 'message': `This service: ${carModel} is already exist. ` }); //Conflict 

    try {

        //create and store the new user
        const result = await carModeldb.create({ 
            "carModel": carModel
        });

        console.log(result);

        res.status(200).json({ 'success': ` the carModel ${carModel} added successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {handleNewCarModel };