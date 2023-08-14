const express = require('express');
const router = express.Router();




//user routes

// /api/allusers
router.get('/allusers', isAuthenticated, isAdmin, allUsers); //admin only
// /api/user/id
router.get('/user/:id', isAuthenticated, singleUser); //admin and user
// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser); //admin and user
// /api/admin/user/delete/id
router.delete('/user/delete/:id', isAuthenticated, isAdmin, deleteUser); //admin and user

module.exports = router;