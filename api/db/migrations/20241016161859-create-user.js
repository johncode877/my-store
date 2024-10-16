'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {    
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },
  // para realizar rollback de los cambios
  async down (queryInterface, Sequelize) {    
    await queryInterface.dropTable(USER_TABLE);
  }
};
