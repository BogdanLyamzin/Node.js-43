const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST)
    .then(()=> console.log("Database connect success"))
    .catch(error => console.log(error.message))