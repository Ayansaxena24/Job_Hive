const express = require('express');
const { signup } = require('../controllers/authController');
const router = express.Router();


//auth routes
// /api/singup
router.post('/signup', signup);
// /api/singin
router.post('/signin', signup);

module.exports = router;