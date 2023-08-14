

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxLength: 3,
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
        maxLength: 3,
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
        maxLength: [6, 'password must be at least 6 characters'],
    }, 

})