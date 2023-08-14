const express = require('express');
const router = express.Router();
const { createjob }




//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)

module.exports = router;