'use strict';
const { DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE, UserSchema } = require('../models/user.model');

const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model');

const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');

const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');

const { ORDER_TABLE} = require('../models/order.model');

const { ORDER_PRODUCT_TABLE, OrderProductSchema } = require('../models/order-product.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CUSTOMER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    }
    });
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  async down(queryInterface) {

    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    
    
    
    
    
  }
};
