const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    const statusCode = err.statusCode || 500;
  
    const errorResponse = {
      success: false,
      status: statusCode,
      message: err.message || 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    };
  
    if (err.name === 'ValidationError') {
      errorResponse.message = Object.values(err.errors)
        .map(error => error.message)
        .join(', ');
      errorResponse.status = 400;
    }
  
    if (err.code === 11000) {
      errorResponse.message = 'Duplicate key error';
      errorResponse.status = 409;
    }
  
    if (err.name === 'CastError') {
      errorResponse.message = `Invalid ${err.path}: ${err.value}`;
      errorResponse.status = 400;
    }
  
    res.status(errorResponse.status).json(errorResponse);
  };
  
  module.exports = errorHandler;