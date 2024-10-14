
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,  
  dbUser: process.env.DB_USER_MS,
  dbPassword: process.env.DB_PASSWORD_MS,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME_MS,
  dbPort: process.env.DB_PORT,
}

module.exports = { config }