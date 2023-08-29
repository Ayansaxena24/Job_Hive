const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");


//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,   
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("DB Connected"))
.catch(err => console.log("DB Connection Error: ", err));

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

//port
const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});