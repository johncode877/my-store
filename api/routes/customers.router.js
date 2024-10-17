const CustomersService = require('./../services/customer.service');
const express = require('express');

const service = new CustomersService();
const router = express.Router();

const validatorHandler = require('../middlewares/validator.handler');
const { getCustomerSchema, updateCustomerSchema, createCustomerSchema } =
    require('../schemas/customer.schema');

router.get('/', async (req, res, next) => {
    try {
        const customers = await service.find();
        res.json(customers);
    } catch (error) {
        next(error);
    }
});


router.get('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.findOne(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);



router.post('/',
    validatorHandler(createCustomerSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newModel = await service.create(body);
            res.status(201).json(newModel);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    validatorHandler(updateCustomerSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const model = await service.update(id, body);
            res.json(model);
        } catch (error) {
            next(error);
        }
    });

router.delete('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const rta = await service.delete(id);
            res.status(204).json(rta);
        } catch (error) {
            next(error);
        }
    });

module.exports = router;
