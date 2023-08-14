//USING MVC(MODERN VIEW CONTROLLER)

const userModel = require('../models/userModel');
const user = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');


exports.signup = async (req, res, next) => {
    const {email} = req.body;
    const userExist = await User.findone({email});
    if (userExist) {
        return next(new ErrorResponse('E-mail already registered', 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
    })
    } catch (error) {
        next(error);
    }
}