const { Strategy } = require("passport-local");

const AuthService = require('./../../../services/auth.service');

const service = new AuthService();


const options = { 
    usernameField: 'email',
    passwordField: 'password' 
  }

const LocalStrategy = new Strategy(options, 
    async (email, password, done) => {
        try {
            // busca al usuario 
            const user = await service.findByEmail(email);
            if (!user) {
                done(boom.unauthorized(), false);            
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                done(boom.unauthorized(), false);
                
            }
            delete user.dataValues.password;
            done(null, user);

        } catch (error) {
            done(error, false);
        }

    });

/*
const localStrategyHandler = async (email, password, done) => {
    try {
        console.log("localStrategyHandler");
        const user = await service.findByEmail(email);
        if (!user) return done(boom.notFound(), false);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(boom.unauthorized(), false);

        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
};

const LocalStrategy = new Strategy({ usernameField: 'email', name: "local" }, 
                                   localStrategyHandler);
*/

module.exports = LocalStrategy;

