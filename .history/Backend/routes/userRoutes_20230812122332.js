const express = require('express');
const router = express.Router();
const { allUsers } = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/auth');


//user routes

// /api/me
router.get('/me', isAuthenticated, userProfile);

module.exports = router;