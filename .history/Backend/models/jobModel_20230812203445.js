const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

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

    user: {
        type: ObjectId,
        ref: 'User',
        req
    }, 
    

}, {timestamps: true})



module.exports = mongoose.model("Job", jobSchema);