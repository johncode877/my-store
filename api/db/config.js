const { config } = require('./../config/config');
const PASSWORD = encodeURIComponent(config.dbPassword);

/*
const USER = encodeURIComponent(config.dbUserMySql);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPortMySql}/${config.dbName}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'mysql', 
    },
    production: {
        url: URI,
        dialect: 'mysql', 
    }
}
*/

const USER = encodeURIComponent(config.dbUser);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'postgres', 
    },
    production: {
        url: URI,
        dialect: 'postgres', 
    }
}