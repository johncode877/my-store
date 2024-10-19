const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

// no lleva llaves porque esta definido en el archivo 
// index.js
const setupModels = require('./../db/models');



/*
const USER = encodeURIComponent(config.dbUserMySql);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPortMySql}/${config.dbName}`;
console.log(URI);

const sequelize = new Sequelize(URI,{
   dialect: 'mysql',
   logging: true,
});
*/


const options = {
   dialect: 'postgres',
   logging: config.isProd ? false : true,
}

if (config.isProd) {
   options.dialectOptions = {
      ssl: {
         rejectUnauthorized: false
      }
   }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

// sincroniza el esquema y los modelos 
// y crea las tablas 

// lo comentamos para poder hacerlo a traves 
// de las migraciones
//sequelize.sync({alter: true});

module.exports = sequelize;

