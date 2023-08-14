const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob } = require('../controllers/jobController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');




//job routes

// /api/job/create
router.post('/job/create', isAuthenticated, isAdmin, createJob)
// /api/job/id
router.get('/job/:id', singleJob)
// /api/job/update/job_id
router.get('/job/update/:job_id', isAuthenticated, isA, updateJob);

module.exports = router;