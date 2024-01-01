const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobController');
const { isAuthenticated, isAdmin, isCreator } = require('../middleware/auth');
const { createCreatorJobHistory } = require('../controllers/userController');




//job routes

// /api/job/create
router.post('/job/create', isAuthenticated, isCreator, createJob)
// /api/job/id
router.get('/job/:id', singleJob)
// /api/job/update/job_id
router.put('/job/update/:job_id', isAuthenticated, isCreator, updateJob);
// /api/jobs/show
router.get('/jobs/show', showJobs);
//testing
router.get('/jobs/applicants', isAuthenticated, isCreator, getApplicants);

module.exports = router;