const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
const { Association } = require('sequelize');

class OrdersService {

  constructor() {
  }
  async create(data) {
    const model = models.Order.create(data);
    return model;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    const model = models.Order.findByPk(id, {
       //include: ['customer']   

       // podemos anidar aun mas e incluir 
       // la relacion de customer con usuario 
       include: [
          {
            association : 'customer',
            include: ['user']  
          }
       ]
    });

    if (!model) {
      throw boom.notFound('order not found');
    }

    return model;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrdersService;