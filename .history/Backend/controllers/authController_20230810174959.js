//USING MVC(MODERN VIEW CONTROLLER)

const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');


exports.signup = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return next(new ErrorResponse("E-mail already registred", 400));
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


exports.signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        return next(new ErrorResponse("Please add an email", 400));
    }
    if (!password) {
        return next(new ErrorResponse("Please add a password", 400));
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