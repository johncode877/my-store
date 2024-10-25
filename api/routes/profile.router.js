const express = require('express');
const passport = require('passport');
const router = express.Router();

const OrderService = require('../services/order.service');

const service = new OrderService();

router.get('/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
       const payload = req.user;
       const orders = await service.findByUser(payload.sub);
       res.json(orders);
    } catch (error) {
      next(error);
    }
  });


module.exports = router;