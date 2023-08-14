const express = require('express');
const router = express.Router();
const { createJob } = require('../controllers/jobController');
/auth');




//job routes

// /api/job/create
router.post('/job/create', isAuthenticated, createJob)

module.exports = router;