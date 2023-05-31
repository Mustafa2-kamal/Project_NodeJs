
const join =require('../models/join.js')


const handleNewjoin = async (req, res) => {

    console.log(req.body);

    const {email,major,bio,carBrand,firstName,lastName,phone} = req.body;


  
    try {

        //create and store the new user
        const result = await join.create({ 
            "firstName": firstName,
            "lastName": lastName,
            "workerEmail": email,
            "phone": phone,
            "serviceName":major,
            "carBrand":carBrand,
            "bio":bio,
        });

        console.log(result);

        res.status(200).json({ 'success': ` the join ${workerEmail} added successfully`,id:result._id  });
    } catch (err) {
        res.status(500).json({ 'message': err.message});
    }
}

module.exports = { handleNewjoin };