const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobController');
const { isAuthenticated, isAdmin, isCreator } = require('../middleware/auth');




//job routes

// /api/job/create
router.post('/job/create', isAuthenticated, isCreator, createJob, crea)
// /api/job/id
router.get('/job/:id', singleJob)
// /api/job/update/job_id
router.put('/job/update/:job_id', isAuthenticated, isCreator, updateJob);
// /api/jobs/show
router.get('/jobs/show', showJobs);

module.exports = router;