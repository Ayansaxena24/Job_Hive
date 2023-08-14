const express = require('express');
const { signup } = require('../controllers/authController');
const router = express.Router();


//auth routes
// /api/
router.get('/signup', signup);

module.exports = router;