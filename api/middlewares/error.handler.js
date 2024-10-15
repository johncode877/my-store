const boom = require('@hapi/boom');
const { ValidationError } = require('sequelize');

function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// Error que se presenta
// Cannot set headers after they are sent to the client

function boomErrorHandler(err, req, res, next) {
  console.log('boomErrorHandler');
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function ormErrorHandler(err, req, res, next) {
  console.log("ormErrorHandler");
    
  if (err instanceof ValidationError) {    
      throw boom.conflict(err.errors[0].message)
  } else {
      next(err);
  }

  /*    
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  } else { 
    next(err); 
  }
  */

};



module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
