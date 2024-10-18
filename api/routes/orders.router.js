const express = require('express');
const OrderService = require('../services/order.service')

const router = express.Router();
const service = new OrderService();

const validatorHandler = require('../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema,addItemSchema } =
  require('../schemas/order.schema');


router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const model = await service.findOne(id);
      res.json(model);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const model = await service.create(body);
      res.status(201).json(model);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/:id/products',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;      
      const model = await service.addItem(id,body);
      res.status(201).json(model);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;