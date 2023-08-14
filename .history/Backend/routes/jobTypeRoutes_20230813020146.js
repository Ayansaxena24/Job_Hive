const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { createJobType } = require('../controllers/jobTypeController');
const router = express.Router();




//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)
// /api/type/jobs
router.post('/type/jobs', isAuthenticated, createJobType)

module.exports = router;