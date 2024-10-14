const { Pool } = require('pg');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const pool=new Pool({connectionString:URI});

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