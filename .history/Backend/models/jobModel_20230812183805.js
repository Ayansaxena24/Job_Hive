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
        required: [true, 'description is required'],
        maxLength: 70,
    }, 
    

}, {timestamps: true})



module.exports = mongoose.model("Job", jobSchema);