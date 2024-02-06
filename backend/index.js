const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { dbConnection } = require('./dbConnection');
const cors = require('cors');
const User = require('./schema');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

dbConnection();

app.listen(PORT, () => {
    console.log("Server listening on port: ", PORT);
});

app.get("/api/v1/", (req, res) => {
    res.send("Portfolio Default Route");
});

app.post("/api/v1/sendMessage", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const data = await User.create(
            {
                name: name,
                email: email,
                message: message,
            }
        );

        res.status(200).json(
            {
                status: true,
                data: data,
                message: "Data saved successfully"
            }
        );

    }
    catch (err) {
        res.status(500).json(
            {
                status: false,
                message: "Internal Server Error",
                error: err.message,
            }
        )
    }
});

