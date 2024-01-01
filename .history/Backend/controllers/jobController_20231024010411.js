const Job = require('../models/jobModel')
const JobType = require('../models/jobTypeModel')
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/userModel')

//create job 
exports.createJob = async (req, res, next) => {
    const {title, description, salary, location} = req.body;
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            user: req.user.id
        });
        // console.log(req.user.id);
        // console.log(req.user._id);
        const currentUser = await User.findOne({_id: req.user.id});
        console.log(currentUser);
        if (!currentUser) {
            return next(new ErrorResponse("You need to Log In", 401));
        } else {
            const addJobCreatorHistory = {
                title, 
                description,
                salary,
                location,
                // user: req.user._id
                user: req.user.id
            }
            currentUser.jobCreatorHistory.push(addJobCreatorHistory);
            await currentUser.save();
        }
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
        const job = await Job.findById(req.params.id).populate;
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

    //enable search
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i' //case insensitive
        }
        } : {}

        //filter jobs by category ids
        let ids =[];
        const jobTypeCategory = await JobType.find({}, {_id:1}); //_id means we want to have only ids
        jobTypeCategory.forEach(cat => {
            ids.push(cat._id);
        })

        let cat = req.query.cat; //category id
        let categ = cat !== '' ? cat : ids; //if category id is not empty, then use it, otherwise use all ids

        //jobs by location
        let locations = [];
        const jobByLocation = await Job.find({}, {location:1});
        jobByLocation.forEach(val => {
            locations.push(val.location);
        });
        let setUniqueLocation = [...new Set(locations)]; //remove duplicate locations 
                                                          //...new Set() means we want to have an array 
                                                          //Set() is a collection of unique values
        let location = req.query.location; //location
        let locationFilter = location !== '' ? location : setUniqueLocation; //if location is not empty, then use it, otherwise use all locations


    //enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    // const count = await Job.find({}).estimatedDocumentCount();
    const count = await Job.find({...keyword, jobType : categ, location : locationFilter}).countDocuments(); //...keyword means if keyword is not empty, then use it, otherwise use all jobs //jobType : categ means if categ is not empty, then use it, otherwise use all jobs

    try {
        const jobs = await Job.find({...keyword, jobType : categ, location : locationFilter}).sort({ createdAt : -1}).populate('jobType', 'jobTypeName').populate('user', 'firstName').skip(pageSize * (page - 1)).limit(pageSize)
        console.log(jobs);
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize), //Math.ceil() rounds up the number of pages
            count,
            setUniqueLocation
        });
    } catch (error) {
        next(error);
    }
    }