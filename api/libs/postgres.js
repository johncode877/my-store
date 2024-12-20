const { Client } = require('pg');


async function getConnection() {

    const client = new Client({
        host: process.env.DB_HOST || 'localhost',
        port: process.env.PORT || 5433,
        user: process.env.DB_USER_MS || 'test',
        password: process.env.DB_PASSWORD_MS || 'db.00',
        database: process.env.DB_NAME || 'my_store',
    });

    await client.connect();
    return client;
}

module.exports = getConnection;