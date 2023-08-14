const express = require('express');
const router = express.Router();
const { createJob } = require('../controllers/jobController');
const { isAuthenticated } = require('../controllers/auth');




//job routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJob)

module.exports = router;