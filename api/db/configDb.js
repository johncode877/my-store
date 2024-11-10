const { config } = require('./../config/configEnv');

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
