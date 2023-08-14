const jobType = require('../models/jobTypeModel')
const ErrorResponse = require('../utils/errorResponse');

//create job category
exports.createJobType = async (req, res, next) => {
    try {
        const jobT = await jobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobT
        });
    } catch (error) {
        next(error);
    }
    }

//all jobs category
exports.allJobsType = async (req, res, next) => {
    try {
        const jobT = await jobType.find();
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
    }

//update job type
exports.updateJobType = async (req, res, next) => {
    try {
        const jobT = await jobType.findByIdAndUpdate(req.params.id, req.body, { new : true);
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
    }