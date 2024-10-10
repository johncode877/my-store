const boom = require('@hapi/boom');


function validatorHandler (schema, property) {
  // propiedad de closure
  // creación de middleware dinámicos
  return (req,res,next) => {
    const data = req[property];
    const { error } = schema.validate(data, {abortEarly: false});
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validatorHandler;
