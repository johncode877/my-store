const { Strategy, ExtractJwt } = require("passport-jwt");
const { config } = require('./../../../config/configEnv');


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

const JwtStrategy = new Strategy(options,
    (payload,done) => {
   return done(null, payload);
});



module.exports = JwtStrategy;