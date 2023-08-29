const express = require('express');
const router = express.Router();
const { createJob } = require('../controllers/jobController');
const { isAuthenticated } = require('../middleware/auth');




//job routes

// /api/job/create
router.post('/job/create', isAuthenticated, createJob)
// /api/job/id
router.post('/job/:id', isAuthenticated, createJob)

module.exports = router;