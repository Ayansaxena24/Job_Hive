const jobType = require('../models/jobTypeModel')
const ErrorResponse = require('../utils/errorResponse');

//create job category
exports.createJobType = async (req, res, next) => {
    try {
        const jobT = await jobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        });
        res.status(200).json({
            success: true,
            jobT
        });
    } catch (error) {
        next(error);
    }
    }