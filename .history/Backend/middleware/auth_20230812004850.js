const errorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    //Make sure that the token exists
    if (!token) {
        return next(new errorResponse('Not authorized to access this route', 401));
    }
}