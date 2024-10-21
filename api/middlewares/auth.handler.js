const boom = require('@hapi/boom');
const { config } = require('./../config/configEnv');

function checkApiKey(req,res,next) {
  
    const apiKey = req.headers['api_key'];
    if(apiKey===config.apiKey){
        next();
    } else {
       next(boom.unauthorized());
    }

}

module.exports = {checkApiKey} 