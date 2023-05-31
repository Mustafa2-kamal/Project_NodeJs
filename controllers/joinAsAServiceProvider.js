
const join =require('../models/join.js')


const handleNewjoin = async (req, res) => {

    console.log(req.body);

    const {workerEmail,workerName,serviceName,note,carBrand} = req.body;

   

   // check for duplicate usernames in the db
    const isjoinExist = await join.findOne({ workerEmail: workerEmail }).exec();
    if (isjoinExist) return res.status(409).json({ 'message': `This join: ${workerEmail} is already exist. ` }); //Conflict 

    try {

        //create and store the new user
        const result = await join.create({ 
            "workerName": workerName,
            "workerEmail": workerEmail,
            "serviceName":serviceName,
            "carBrand":carBrand,
            "bio":note,
        });

        console.log(result);

        res.status(200).json({ 'success': ` the join ${workerEmail} added successfully` });
    } catch (err) {
        res.status(500).json({ 'message': err.message});
    }
}

module.exports = { handleNewjoin };