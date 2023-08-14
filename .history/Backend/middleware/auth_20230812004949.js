const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    //Make sure that the token exists
    if (!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req,=
    } catch (error) {
        
    }
}