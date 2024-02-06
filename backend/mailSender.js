const nodemailer = require("nodemailer");
require('dotenv').config();


const mailSender = async (name, email) => {

    try {

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });


        let info = await transporter.sendMail({
            from: `"Portfolio " <${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: "Message Recieved Successfully",
            html: `heyy  ${name} your meessage recieved successfully`,
        });

        return info;
    }
    catch (error) {
        return error;
    }
}


module.exports = mailSender;