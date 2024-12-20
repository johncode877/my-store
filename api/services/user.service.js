const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

//const getConnection = require('../libs/postgres');

// se ubica al modelo con el nombre 
// definido en el atributo modelName
// de la clase User 
const {models} = require('./../libs/sequelize');

class UsersService {

    constructor() { }

    async create(data) {

        const hash = await bcrypt.hash(data.password,10);

        const newUser = await models.User.create({
            ...data,
            password: hash
        });

        delete newUser.dataValues.password;
        return newUser;
    }

    async find() {
        //const client = await getConnection();
        //const rta = await client.query('SELECT * FROM tasks');
        // return rta.rows;
        const rta = await models.User.findAll({
            include: ['customer']
        });
        return rta;        
    }

    async findByEmail(email) {
        const user = await models.User.findOne({
            where: {email}
        });
        
        return user;
    }

    async findOne(id) {
        const user = await models.User.findByPk(id);
        if (!user) {
          throw boom.notFound('user not found'); 
        }
        return user;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const rta = await user.update(changes); 
        return rta;
    }

    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy();
        return { id };
    }
}

module.exports = UsersService;