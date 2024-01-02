const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const jobSchema = new mongoose.Schema({

    Company: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        maxLength: 70,
    },

    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        maxLength: 70,
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
    },

    salary: {
        type: String,
        trim: true,
        required: [true, 'Salary is required'],
    },

    location: {
        type: String,
    },

    available: {
        type: Boolean,
        default: true,
    },

    jobType: {
        type: ObjectId,
        ref: "JobType",
        required: true,
    },

    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    }, 
    

}, {timestamps: true})



module.exports = mongoose.model("Job", jobSchema);