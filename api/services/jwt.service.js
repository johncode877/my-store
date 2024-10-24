
const jwt = require('jsonwebtoken');
const { config } = require('./../config/configEnv');


class JwtService {

    constructor() {
    }

    async generateToken(user) {

        const secret = config.jwtSecret;   

        const jwtConfig = {
            expiresIn: '1800000',// 10 minutos en milisegundos
        };

        const payload = {
            sub: user.id,
            role: user.role
        };

        return jwt.sign(payload, secret, jwtConfig);
    }

}


module.exports = JwtService;