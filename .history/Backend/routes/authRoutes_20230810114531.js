const express = require('express');
const router = express.Router();


//auth routes
router.get('/', (req, res) => {
    res.send("Hello from Node Js");
})