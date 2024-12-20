const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const {models} = require('./../libs/sequelize');

class CustomersService {

    constructor() { }

    //async create(data) {    
    //    const model  = await models.Customer.create(data);    
    //    return model;
    //}

    async create(data){

        const hash = await bcrypt.hash(data.user.password,10);

        const newData = {
           ...data,
           user: {
            ...data.user,
            password: hash 
           }
        }

        // codigo mas simplificado , aprovechando el mecanismo 
        // de asociacion (crea el usuario y el customer a la vez)
        const newCustomer = await models.Customer.create(newData,{
            include:['user']
        });

        /*
        const newUser = await models.User.create(data.user);
        const newCustomer = await models.Customer.create({
          ...data,
          userId: newUser.id
        });
        */
        
        delete newCustomer.user.dataValues.password;

        return newCustomer;
    }

    async find() {
        const rta = await models.Customer.findAll({
          include:['user'] 
        });
        return rta;        
    }

    async findOne(id) {
        const model = await models.Customer.findByPk(id);
        if (!model) {
          throw boom.notFound('customer not found'); 
        }
        return model;
    }

    async findOneByUser(userId) {
        const model = await models.Customer.findOne({
            where: {userId}
        });
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