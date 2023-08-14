const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const jobTypeSchema = new mongoose.Schema({

    jobTypeName: {
        type: String,
        trim: true,
        required: [true, 'Job category is required'],
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

    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    }, 
    

}, {timestamps: true})



module.exports = mongoose.model("JobType", jobTypeSchema);