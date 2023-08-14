const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();




//job type routes

// /api/allusers
router.post('/type/create', isAuthenticated, createJ)

module.exports = router;