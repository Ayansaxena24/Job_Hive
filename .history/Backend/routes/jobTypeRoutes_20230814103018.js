const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobTypeController');
const router = express.Router();




//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, isAdmin, createJobType)
// /api/type/jobs
router.get('/type/jobs', allJobsType)
// /api//type/update/:_id
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType)
// /api//type/delete/type_id
router.put('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobTypeJobType)

module.exports = router;