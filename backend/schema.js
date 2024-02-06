const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config()
const mailSender = require('./mailSender');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: String,
        default: new Date(Date.now()),
    },
});

// Define a post-save hook to send email before the document has been saved
userSchema.pre("save", async function (next) {

    try {

        const mailResponse = await mailSender(
            this.name,
            this.email
        );

        console.log("email send successfully : ", mailResponse);
        next();

    } catch (err) {
        console.log("Error when sending email");
        console.log(err);
    }
});


module.exports = mongoose.model('User', userSchema)

