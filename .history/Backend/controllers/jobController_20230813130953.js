const Job = require('../models/jobModel')
const ErrorResponse = require('../utils/errorResponse');

//create job 
exports.createJob = async (req, res, next) => {
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
    }

//singlejob 
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
    }

//update job by id 
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, {new: true}).populate('jobType', 'jopTypeName').populate('user', 'firstName lastName'); //new: true returns the updated job
        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
    }

//show jobs 
exports.showJobs = async (req, res, next) => {

    //enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find({}).estimatedDocumentCount();
    try {
        const jobs = await Job.find().skip(pageSize * (page - 1)).limit(pageSize); //skip() skips the first 5 jobs
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize), //Math.ceil() rounds up the number of pages
            count
        });
    } catch (error) {
        next(error);
    }
    }