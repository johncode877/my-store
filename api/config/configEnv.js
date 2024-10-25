
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,  
  dbUrl: process.env.DATABASE_URL,
  dbUrlProd: process.env.DATABASE_PUBLIC_URL,
  apiKey:process.env.API_KEY,  
  jwtSecret: process.env.JWT_SECRET, 
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS
}

module.exports = { config }