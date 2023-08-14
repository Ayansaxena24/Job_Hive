const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

//load all users
exports.allUsers = async (req, res, next) => {
    //enable pagination
    const pagination

    try {
        const users = await User.find();
        res.status(200).json({ 
            success: true, 
            data: users 
        })
    } catch (err) {
        next(err);
    }
}