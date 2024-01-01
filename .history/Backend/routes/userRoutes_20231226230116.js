const express = require('express');
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser, createUserJobHistory, createCreatorJobHistory, getApplicantInfo, changeStatus } = require('../controllers/userController');
const { isAuthenticated, isAdmin, isCreator } = require('../middleware/auth');


//user routes

// /api/allusers
router.get('/allusers', isAuthenticated, isAdmin, allUsers); //admin only
// /api/user/id
router.get('/user/:id', isAuthenticated, singleUser); //admin and user
// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser); //admin and user
// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser); //admin and user
// /api/user/jobhistory
router.post('/user/jobhistory', isAuthenticated, createUserJobHistory)
// /api/creator/jobcreatorhistory
router.post('/creator/jobcreatorhistory', isAuthenticated, isCreator, createCreatorJobHistory)
// /api/creator/getApplicantInfo
router.get('/creator/getApplicantInfo', isAuthenticated, isCreator, getApplicantInfo)
// /api/creator/getApplicantInfo
router.post('/creator/changeStatus', changeStatus)

module.exports = router;