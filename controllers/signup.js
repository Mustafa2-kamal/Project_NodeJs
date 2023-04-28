const User = require('../models/user.js');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {

    console.log(req.body)
    const { firstName, lastName, email, password, phone, carModel } = req.body;
    // const user = req.body.username;
    // const email = req.body.email;
    // const pwd = req.body.password;

    if (!email || !password) return res.status(400).json({ 'message': 'All fields are required.' });

   // check for duplicate usernames in the db
    const isUserExist = await User.findOne({ email: email }).exec();
    if (isUserExist) return res.status(409).json({ 'message': `This Email: ${email} is already in use. ` }); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 8);

        //create and store the new user
        const result = await User.create({ 
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": hashedPwd,
            "phone": phone,
            "carModel":carModel
        });

        console.log(result);

        res.status(200).json({ 'success': `user: ${email} successfully created` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };