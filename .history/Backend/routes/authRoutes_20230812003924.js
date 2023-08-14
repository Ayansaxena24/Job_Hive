const express = require('express');
const { signup, signin } = require('../controllers/authController');
const router = express.Router();


//auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', signin);

module.exports = router;