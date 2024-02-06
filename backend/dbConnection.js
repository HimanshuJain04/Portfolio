const mongoose = require('mongoose');

require('dotenv').config();

exports.dbConnection = () => {
    try {

        mongoose.connect(process.env.DATABASE_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log("DataBase Connection Established");

    } catch (err) {

        console.log("DataBase Connection Failed");
        console.log(err);
        process.exit(1);
    }
}

