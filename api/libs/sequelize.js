const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

// no lleva llaves porque esta definido en el archivo 
// index.js
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUserMySql);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPortMySql}/${config.dbName}`;
console.log(URI);

const sequelize = new Sequelize(URI,{
   dialect: 'mysql',
   logging: true,
});

/*
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI,{
   dialect: 'postgres',
   logging: true,
});
*/


setupModels(sequelize);

// sincroniza el esquema y los modelos 
// y crea las tablas 

// lo comentamos para poder hacerlo a traves 
// de las migraciones
//sequelize.sync({alter: true});

module.exports = sequelize;

