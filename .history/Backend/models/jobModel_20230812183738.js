const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'title is required'],
        maxLength: 70,
    }, 
    title: {
        type: String,
        trim: true,
        required: [true, 'title is required'],
        maxLength: 70,
    }, 
    

}, {timestamps: true})



module.exports = mongoose.model("Job", jobSchema);