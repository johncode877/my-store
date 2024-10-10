

function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function errorHandler (err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message:  err.message,
    stack: err.stack,
  });
}

// Error que se presenta
// Cannot set headers after they are sent to the client

function boomErrorHandler(err,req,res,next) {
  console.log('boomErrorHandler');
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }

  //
  //res.status(500).json({
  //  message:  err.message,
  //  stack: err.stack,
  //});
  //
}

module.exports = { logErrors , errorHandler , boomErrorHandler}
