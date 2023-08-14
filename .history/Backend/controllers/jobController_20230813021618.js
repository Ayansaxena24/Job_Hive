const job = require('../models/jobModel')
const ErrorResponse = require('../utils/errorResponse');

//create job category
exports.createJob = async (req, res, next) => {
    try {
        const job = await job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
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