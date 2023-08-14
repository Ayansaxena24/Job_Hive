const express = require('express');
const router = express.Router();
const { createJob, singleJob } = require('../controllers/jobController');
const { isAuthenticated } = require('../middleware/auth');




//job routes

// /api/job/create
router.post('/job/create', isAuthenticated, createJob)
// /api/job/id
router.get('/job/:id', singleJob)
// /api/job/update/job_id
router.get('/job/update:id', singleJob)

module.exports = router;