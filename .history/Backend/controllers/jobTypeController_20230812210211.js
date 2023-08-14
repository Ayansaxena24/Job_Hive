const jobType = require('./models/jobTypeModel');
const ErrorResponse = require('./utils/errorResponse');

//create job category
exports.createJobType = async (req, res, next) => {
    try {
        const jobT = await jobType.create({
            jobTypeName
        })   
    } catch (error) {
        next(error);
    }
        
    }