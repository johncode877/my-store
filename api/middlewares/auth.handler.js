const boom = require('@hapi/boom');
const { config } = require('./../config/configEnv');

function checkApiKey(req, res, next) {

    const apiKey = req.headers['api_key'];
    if (apiKey === config.apiKey) {
        next();
    } else {
        next(boom.unauthorized());
    }

}

function checkAdminRole(req, res, next) {
    console.log(req.user);
    const user = req.user;

    if (user.role === 'admin') {
        next();
    } else {
        next(boom.unauthorized());
    }

}

// closures
function checkRoles(...roles) {
    return (req, res, next) => {
        console.log(roles);
        const user = req.user;
        if (roles.includes(user.role)) {
            next();
        } else {
            next(boom.unauthorized());
        }
    }

}


module.exports = { checkApiKey, checkAdminRole , checkRoles}