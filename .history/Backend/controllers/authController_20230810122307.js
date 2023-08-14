//USING MVC(MODERN VIEW CONTROLLER)

const user = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');


exports.signup = async (req, res) => {
    const {email} = req.body;
    const userExist = await UserActivation.findone({email})
}