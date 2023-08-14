//check bycrypt documentation

const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const jobHistorySchema = new mongoose.Schema({

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

    role: {
        type: Number,
        default: 0,
    }

}, {timestamps: true})

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