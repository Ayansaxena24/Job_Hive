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
        const jobT = await jobType.findByIdAndUpdate(req.params.type_id, req.body, { new : true });
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
    }

//delete job type
exports.deleteJobType = async (req, res, next) => {
    try {
        const jobT = await jobType.findByIdAndRemove(req.params.type_id);
        res.status(200).json({
            success: true,
            message : "Job type deleted successfully"
        })
    } catch (error) {
        next(new ErrorResponse("server error", 500));
    }
    }

//jobs history 
exports.createUserJobHistory = async (req, res, next) => {
    const {title, description, salary, location} = req.body;

    try {
        const currentUser = await jobType.findOne({_id: req.user.id});
        if (!currentUser) {
            return next(new ErrorResponse("You need to Log In", 401));
        } else {
            const addJobHistory = {
                title, 
                description,
                salary,
                
            }
        }
        res.status(200).json({
            success: true,
            message : "Job type deleted successfully"
        })
    } catch (error) {
        next(new ErrorResponse("server error", 500));
    }
    }