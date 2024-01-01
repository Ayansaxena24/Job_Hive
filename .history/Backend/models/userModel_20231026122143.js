//check bycrypt documentation

const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//jobHistorySchema for user
const jobHistorySchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        maxLength: 70,
    },

    description: {
        type: String,
        trim: true,
    },

    salary: {
        type: String,
        trim: true,
    },

    location: {
        type: String,
    },

    interviewDate: {
        type: Date,
    },

    applicationStatus: {
        type: String,
        enum : ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },

    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    }, 
    

}, {timestamps: true})

//jobCreationHistorySchema for creator
const jobCreationHistorySchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        maxLength: 70,
    },

    description: {
        type: String,
        trim: true,
    },

    salary: {
        type: String,
        trim: true,
    },

    location: {
        type: String,
    },

    interviewDate: {
        type: Date,
    },

    applicationStatus: {
        type: String,
        enum : ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    

    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    }, 
    

}, {timestamps: true})


const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxLength: 32,
    }, 
    lastName: {
        type: String,
        trim: true,
        required: [true, 'last name is required'],
        maxLength: 32,
    }, 
    email: {
        type: String,
        trim: true,
        required: [true, 'email is required'],
        maxLength: 32,
        unique: true,
        match:[
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            'please provide a valid email'
        ]
    }, 
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minLength: [6, 'password must be at least 6 characters'],
    }, 

    jobHistory : [jobHistorySchema],
    jobCreatorHistory : [jobCreationHistorySchema],

    role: {
        type: Number,
        default: 0,
    },

    gender: {
        type: String,
        default: "Male",
        required : [true, 'gender is required'],
    },

    resumeLink: {
        type: String,
        unique: true,
    },

    age: {
        type: Number,
        default: 18,
        required: [true, 'age is required. user must be 18 years or above'],
    },

    highestEducation: {
        type: String,
        default: "IIT BOMBAY",
    },

    marksTenth: {
        type: Number,
        default: 75,
    },

    marksTwelth: {
        type: Number,
        default: 75,
    },

    cgpaUG: {
        type: Number,
        default: 7.5,
    }

}, {timestamps: true})

//validating URL
userSchema.path('resumeLink').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL');


//encrypt password before saving
userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

//compare user password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

//return a JWT token 
userSchema.methods.getJwtToken = function () {
    return jwt.sign({id : this.id}, process.env.JWT_SECRET, {
        expiresIn: 3600
    }); //this is our payload
}

module.exports = mongoose.model("User", userSchema);