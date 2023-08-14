const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

//load all users
exports.allUsers = async (req, res, next) => {
    //enable pagination
    const pageSize = 10; //10 users per page
    const page = Number(req.query.pageNumber) || 1; //if no page number, default to 1
    const count = await User.find({}).estimatedDocumentCount(); //count everything in the doc

    try {
        const users = await User.find().sort({}); //find all users
        res.status(200).json({ 
            success: true, 
            data: users 
        })
    } catch (err) {
        next(err);
    }
}