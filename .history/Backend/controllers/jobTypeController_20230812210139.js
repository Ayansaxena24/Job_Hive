const jobType = require('./models/jobTypeModel');
const ErrorResponse = require('./utils/errorResponse');

//create job category
exports.createJobType = async (req, res, next) => {
    try {
        const jobt = await jobType.create(req.body);
        res.status(201).json({
            success: true,
            data: jobTypeData
        })   
    } catch (error) {
        next(error);
    }
        
    }