
const nodemailer = require("nodemailer");
const User = require('../models/user.js');

const sendEmail = async (email, subject, text) => {

console.log(process.env.USER,process.env.PASS,process.env.HOST,process.env.SERVICE)
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
            to: 'mostafakamalsokar@gmail.com',
            subject: subject,
            text: `http://localhost:5000/resetPassword?username=${email}`
        });
   

        console.log("email sent sucessfully");

    } catch (error) {
        console.log(error);
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;