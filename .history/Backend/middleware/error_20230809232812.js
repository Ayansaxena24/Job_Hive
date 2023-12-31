const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;
};

module.exports = errorHandler;