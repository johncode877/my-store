const { config } = require('./../config/config');

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

module.exports = {
    development: {
        url: config.dbUrl,
        dialect: 'postgres',
    },
    production: {
        url: config.dbUrl,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
}
