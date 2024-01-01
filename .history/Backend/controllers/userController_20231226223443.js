const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

//load all users
exports.allUsers = async (req, res, next) => { 
    //enable pagination 
    const pageSize = 10; //10 users per page
    const page = Number(req.query.pageNumber) || 1; //if no page number, default to 1
    const count = await User.find({}).estimatedDocumentCount(); //count everything in the doc

    try {
        const users = await User.find().sort({ createdAt: -1}).select('-password') //sort by most recent //don't return password
        .skip(pageSize * (page - 1)) //skip the first 10 users
        .limit(pageSize); //limit to 10 users per page
        res.status(200).json({ 
            success: true, 
            users,
            page,
            pages : Math.ceil(count / pageSize),
            count
        })
        next();
    } catch (err) {
        next(err);
    }
}

// show single user
exports.singleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password'); //don't return password
        res.status(200).json({ 
            success: true, 
            user 
        });
        next();
    } catch (err) {
        next(err);
    }
}

// edit user
exports.editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true}); //new: true returns the updated user
        res.status(200).json({ 
            success: true, 
            user 
        });
        next();
    } catch (err) {
        next(err);
    }
}


// delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id); //delete user
        res.status(200).json({ 
            success: true, 
            message : 'User deleted'
        });
        next();
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}


//jobs history 
exports.createUserJobHistory = async (req, res, next) => {
    const {title, description, salary, location, creatorId} = req.body;
    console.log(creatorId);
    try {
        const currentUser = await User.findOne({_id: req.user.id});
        if (!currentUser) {
            return next(new ErrorResponse("You need to Log In", 401));
        } else {
            const addJobHistory = {
                title, 
                description,
                salary,
                location,
                user: creatorId
            }
            currentUser.jobHistory.push(addJobHistory);
            await currentUser.save();
        }
        res.status(200).json({
            success: true,
            currentUser
        })
    } catch (error) {
        next(error);
    }
    }

// jobs creation history 
exports.createCreatorJobHistory = async (req, res, next) => {
    const {title, description, salary, location} = req.body;

    try {
        console.log("hello Abhay");
        const currentUser = await User.findOne({_id: req.user.id});
        if (!currentUser) {
            return next(new ErrorResponse("You need to Log In", 401));
        } else {
            const addJobCreatorHistory = {
                title, 
                description,
                salary,
                location,
                user: req.user._id
            }
            currentUser.jobCreatorHistory.push(addJobCreatorHistory);
            await currentUser.save();
        }
        res.status(200).json({
            success: true,
            currentUser
        })
    } catch (error) {
        next(error);
    }
    }

//The creator gets the Applicant Info
exports.getApplicantInfo = async (req, res, next) => {

    try {
        
        const creatorId = req.user.id;
        console.log("creatorId --> ");
        console.log(creatorId);

        const response = await User.find({
           jobHistory:{
            // $in:{
            //     user:creatorId
            // }
                $elemMatch: { //this is the query for nested objects
                    'user': creatorId 
                }
           } 
        })
        console.log(response);

        res.status(200).json({
            success: true,
            allApplicants: response
        })
    } catch (error) {
        next(error);
    }
}


//The creator can change the job status of the applicant
exports.changeStatus = async (req, res, next) => {

    try {
        
        const creatorId = req.user.id;
        console.log("creatorId --> ");
        console.log(creatorId);

        const {jobHistoryId} = req.body;
        const updatedStatus

        const response = await User.find({
           jobHistory:{
            // $in:{
            //     user:creatorId
            // }
                $elemMatch: { //this is the query for nested objects
                    'user': creatorId 
                }
           } 
        })
        console.log(response);

        res.status(200).json({
            success: true,
            allApplicants: response
        })
    } catch (error) {
        next(error);
    }
}