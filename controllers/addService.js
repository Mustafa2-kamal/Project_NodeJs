
const Service =require('../models/services.js')


const handleNewService = async (req, res) => {

    console.log(req.body)
    const { serviceName, serviceType,serviceImage} = req.body;
   

   // check for duplicate usernames in the db
    const isServiceExist = await Service.findOne({ serviceName: serviceName }).exec();
    if (isServiceExist) return res.status(409).json({ 'message': `This service: ${serviceName} is already exist. ` }); //Conflict 

    try {

        //create and store the new user
        const result = await Service.create({ 
            "serviceName": serviceName,
            "serviceType": serviceType,
            "serviceImage":serviceImage
        });

        console.log(result);

        res.status(200).json({ 'success': ` the service ${serviceName} added successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message});
    }
}

module.exports = { handleNewService };