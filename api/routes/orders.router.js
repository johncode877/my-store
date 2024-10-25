const express = require('express');
const OrderService = require('../services/order.service')
const CustomerService = require('../services/customer.service')
const passport = require('passport');
const router = express.Router();
const orderService = new OrderService();
const customerService = new CustomerService();

const validatorHandler = require('../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema,addItemSchema } =
  require('../schemas/order.schema');


router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const model = await orderService.findOne(id);
      res.json(model);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  //validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const payload = req.user;

      const customer = await customerService.findOneByUser(payload.sub);
      
      const order = await orderService.create({
        ...body,
        customerId: customer.id
      });
      res.status(201).json(order);
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
      const model = await orderService.addItem(id,body);
      res.status(201).json(model);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;