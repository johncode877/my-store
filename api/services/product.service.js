
const boom = require('@hapi/boom');

const { sequelize, models } = require('../libs/sequelize');

const { Op } = require('sequelize');


class ProductsService {

  constructor() {
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {

    // opcion por defecto
    const options = {
      include: ['category'],
      where: {}
    }

    // opciones de limites 
    const {limit , offset} = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }

    const { price } = query;
    if (price) {
      options.where.price = price; 
    }

    const { price_min, price_max } = query;
    
    if (price_min && price_max) {
      
      options.where.price = {
        [Op.gte] : price_min,
        [Op.lte] : price_max,
      }; 

      /*
       options.where.price = {
        [Op.between] : [price_min, price_max]
      }; 
      */
    }


    const data = await models.Product.findAll(options);
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
