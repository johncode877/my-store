
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,  
  dbUrl: process.env.DATABASE_URL,
  dbUrlProd: process.env.DATABASE_PUBLIC_URL,
  apiKey:process.env.API_KEY
  /*
  dbUser: process.env.DB_USER_MS,
  dbPassword: process.env.DB_PASSWORD_MS,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME_MS,
  dbPort: process.env.DB_PORT,
  dbPortMySql: process.env.DB_PORT_MYSQL,
  dbUserMySql: process.env.DB_USER_MS_MYSQL,
  */
}

module.exports = { config }