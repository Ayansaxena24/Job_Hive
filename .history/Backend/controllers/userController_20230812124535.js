const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

//load all users
exports.allUsers = async (req, res, next) => {
    //enable pagination
    const pageSize = 10; //10 users per page
    const page = Number(req.query.pageNumber) || 1; //if no page number, default to 1
    const count = await User.find({}).estimatedDocumentCount(); //count everything in the doc

    try {
        const users = await User.find().sort({ createdAt: -1}).select('-password') //
        .skip(pageSize * (page - 1)) //skip the first 10 users
        .limit(pageSize); //limit to 10 users per page
        res.status(200).json({ 
            success: true, 
            users,
            page,
            pages : Math.ceil(count / pageSize),
            count
        })
        next();
    } catch (err) {
        next(err);
    }
}

// show single user
exports.singleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password'); //don't return password
        res.status(200).json({ 
            success: true, 
            user 
        });
        next();
    } catch (err) {
        next(err);
    }
}

// edit user
exports.editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true}); //new: true returns the updated user
        res.status(200).json({ 
            success: true, 
            user 
        });
        next();
    } catch (err) {
        next(err);
    }
}