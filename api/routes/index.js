const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const orderRouter = require('./orders.router');
const customersRouter = require('./customers.router');

function routerApi(app){

  // router general
  const router = express.Router();

  // path global
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', orderRouter);

}

module.exports = routerApi;

