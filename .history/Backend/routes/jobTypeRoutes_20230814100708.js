const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { createJobType, allJobsType, updateJobType } = require('../controllers/jobTypeController');
const router = express.Router();




//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)
// /api/type/jobs
router.get('/type/jobs', allJobsType)
// /api//type/update/:_id
router.put('/type/update/:_id', isAuthenticated, isA, updateJobType)

module.exports = router;