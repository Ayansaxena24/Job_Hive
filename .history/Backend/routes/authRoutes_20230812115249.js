const express = require('express');
const { signup, signin, logout, userProfile } = require('../controllers/authController');
const router = express.Router();


//auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);
// /api/me
router.get('/me', isAuth ,userProfile);

module.exports = router;