const { config } = require('./../config/configEnv');

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

console.log('url:'+config.dbUrl);

module.exports = {
    development: {
        url: config.dbUrl,
        dialect: 'postgres',
    },
    production: {
        url: config.dbUrlProd,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
}
