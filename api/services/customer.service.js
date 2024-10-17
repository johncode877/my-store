const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize');

class CustomersService {

    constructor() { }

    async create(data) {    
        const model  = await models.Customer.create(data);    
        return model;
    }

    async create(data){
        const newCustomer = await models.Customer.create(data,{include:['user']});
        return newCustomer;
    }

    async find() {
        const rta = await models.Customer.findAll();
        return rta;        
    }

    async findOne(id) {
        const model = await models.Customer.findByPk(id);
        if (!model) {
          throw boom.notFound('customer not found'); 
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
        return { rta: true };
    }
}

module.exports = CustomersService;