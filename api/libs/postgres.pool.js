const { Pool } = require('pg');
const { config } = require('./../config/config');

const options = {};

if (config.isProd) {
    options.connectionString = config.dbUrl;
    options.ssl = {
        rejectUnauthorized: false
    };
} else {
    const USER = encodeURIComponent(config.dbUser);
    const PASSWORD = encodeURIComponent(config.dbPassword);
    const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
    options.connectionString = URI;
}

const pool = new Pool(options);







/*
const pool = new Pool({
    host: process.env.HOSTNAME || 'localhost',
    port: process.env.PORT || 5433,
    user: process.env.DB_USER_MS || 'test',
    password: process.env.DB_PASSWORD_MS || 'db.00',
    database: process.env.DB_NAME_MS || 'my_store',
});
*/

module.exports = pool;