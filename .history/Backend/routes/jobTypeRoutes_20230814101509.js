const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJobType, allJobsType, updateJobType } = require('../controllers/jobTypeController');
const router = express.Router();




//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, isAdmin, createJobType)
// /api/type/jobs
router.get('/type/jobs', allJobsType)
// /api//type/update/:_id
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType)

module.exports = router;