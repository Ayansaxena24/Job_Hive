const express = require('express');
const router = express.Router();




//job type routes

// /api/allusers
router.post('/type/create', isAuthenticated, createjobType)

module.exports = router;