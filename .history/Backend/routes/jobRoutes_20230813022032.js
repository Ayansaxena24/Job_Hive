const express = require('express');
const router = express.Router();
const { createJob } = require('../controllers/jobController');
const { isAuthenticated } = require('../controllers/auth');




//job routes

// /api/job/create
router.post('/type/create', isAuthenticated, createJob)

module.exports = router;