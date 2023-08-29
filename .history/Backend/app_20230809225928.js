const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");


//port
const port = process.env.PORT || 8000;

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
    });