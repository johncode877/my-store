const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

//passport.initialize();
passport.use(LocalStrategy);
passport.use(JwtStrategy);

module.exports = passport;