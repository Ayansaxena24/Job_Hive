const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxLength: 32,
    }, 
    

}, {timestamps: true})



module.exports = mongoose.model("Job", jobSchema);