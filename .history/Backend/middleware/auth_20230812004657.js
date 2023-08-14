const errorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//check if user is authenticated
exposrts.isAuthenticated = async (req, res, next) => {
    const { token }