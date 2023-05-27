
const nodemailer = require("nodemailer");
const User = require('../models/user.js');

const handlSendEmail = async (req, res) => {



    const email = req.params.userId;
    const token = req.params.token;

    console.log(email);

    // const foundUser = await User.findOne({ email: email})

    // if (!foundUser) return res.status(404).send("message:not found");//({'message': "The email or password is incorrect","status":"401"}); //Unauthorized 

 

    try {
        const transporter = nodemailer.createTransport({
            //host: process.env.HOST,
            service: 'hotmail',
            //port: 587,
            //secure: true,
            auth: {
                user: 'a-lamak@hotmail.com',
                pass: '2020@Sokar#',
            }
        });

        // var transporter = nodemailer.createTransport({
        //     host: "smtp.mailtrap.io",
        //     port: 2525,
        //     auth: {
        //       user: "1a110284541986",
        //       pass: "50b708ab5e3488"
        //     }
        //   });


        await transporter.sendMail({
            from: 'a-lamak@hotmail.com',
            to: 'amer.abuamer444@gmail.com',//this is {email}amer.abuamer444@gmail.com//utest7001@gmail.com
            subject: 'Reset your password for Head Gasket app',
            text: `Hi there,\n \n  Click on the link below to reset your password \n https://node-server-wuse.onrender.com/password-reset/${token}/${email}`
        });
   

        console.log("email sent sucessfully");
        res.status(200).json({message:"password reset link sent successfully,check your email"});

    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': err.message });
    }
};

module.exports = {handlSendEmail};