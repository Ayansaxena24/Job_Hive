const express = require('express');
const router = express.Router();
const { allUsers, singleUser, editUser } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


//user routes

// /api/allusers
router.get('/allusers', isAuthenticated, isAdmin, allUsers); //admin only
// /api/user/id
router.get('/user/:id', isAuthenticated, singleUser); //admin and user
// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser); //admin and user
// /api/user/delete/id
router.put('/user/edit/:id', isAuthenticated, editUser); //admin and user

module.exports = router;