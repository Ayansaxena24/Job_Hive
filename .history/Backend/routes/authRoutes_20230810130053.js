const express = require('express');
const { signup } = require('../controllers/authController');
const router = express.Router();


//auth routes
router.get('/', signup);

module.exports = router;