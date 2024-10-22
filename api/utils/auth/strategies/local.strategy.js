const { Strategy } = require("passport-local");
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./../../../services/user.service');
const service = new UserService();


const LocalStrategy = new Strategy(
    { usernameField: 'email',
      passwordField: 'password' 
    }, 
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

