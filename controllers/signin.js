
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sendEmail = require('../controllers/sendEmail');

const JWT_SECRET ="pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";


const handleLogin = async (req, res) => {
    // const user = req.body.username;
    const email = req.body.email;
    const pwd = req.body.password;

    console.log(req.body);

    if (!email || !pwd) return res.status(400).send('message:email and password are required.');

    const foundUser = await User.findOne({ email: email })

    if (!foundUser) return res.status(401).send("message:The email or password is incorrect");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 
   
    
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {

        jwt.sign({email:email},JWT_SECRET,(err,token)=>{
          return res.status(200).json({token,role:foundUser.role});
        })
        // res.status(200).json({
        //     message: "Login successful"
        //   })

         // sendEmail(email,"reset");
        
    } else {
        res.status(401).json({'message': "The email or password is incorrect"});
    }
}

module.exports = { handleLogin };