const express = require('express');
const { signup, signin } = require('../controllers/authController');
const router = express.Router();


//auth routes
// /api/singup
router.post('/signup', signup);
// /api/singin
router.post('/signin', signin);
// /api/singout
router.post('/signin', signin);

module.exports = router;