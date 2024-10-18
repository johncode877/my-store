
const { models } = require('./../libs/sequelize');
class CategoryService {

    constructor() {
    }

    async create(data) {
        const newCategory = await models.Category.create(data);
        return newCategory;
    }

    async find() {
        const data = await models.Category.findAll();
        return data;
    }

    async findOne(id) {
        const data = await models.Category.findByPk(id, {
            include: ['products']
        });

        if (!data) {
            throw boom.notFound('category not found');
        }

        return data;
    }

    async update(id, changes) {

        const data = await models.Category.findByPk(id);
        if (!data) {
            throw boom.notFound('category not found');
        }

        data.update(changes);
    }

    async delete(id) {
        return { id };
    }
}

module.exports = CategoryService;