const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;

    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    //Mongoose duplicate value
    if (err.name === '') {
        const message = `Duplicate field value entered`;
        error = new ErrorResponse(message, 404);
    }
};

module.exports = errorHandler;