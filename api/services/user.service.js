const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');

// se ubica al modelo con el nombre 
// definido en el atributo modelName
// de la clase User 
const {models} = require('./../libs/sequelize');

class UsersService {

    constructor() { }

    async create(data) {
        return data;
    }

    async find() {
        //const client = await getConnection();
        //const rta = await client.query('SELECT * FROM tasks');
        // return rta.rows;
        const rta = await models.User.findAll();
        return rta;        
    }

    async findOne(id) {
        return { id };
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

module.exports = UsersService;