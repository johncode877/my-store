const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

// no lleva llaves porque esta definido en el archivo 
// index.js
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const sequelize = new Sequelize(URI,{
   dialect: 'postgres',
   logging: true,
});

setupModels(sequelize);

// sincroniza el esquema y los modelos 
// y crea las tablas 
sequelize.sync({alter: true});

module.exports = sequelize;
