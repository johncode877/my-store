//const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const { sequelize, models } = require('../libs/sequelize');


class ProductsService {

  constructor() {
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const data = await models.Product.findAll({
      include: ['category']
    });
    return data;
  }

  async findOne(id) {

    const model = await models.Product.findByPk(id);

    if (!model) {
      throw boom.notFound('product not found');
    }

    return model;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { id };

  }

}

module.exports = ProductsService;
