//check bycrypt documentation

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    return kwt.sign({id : this.id}, process.env.JWT_SECRET);
}

module.exports = mongoose.model("User", userSchema);