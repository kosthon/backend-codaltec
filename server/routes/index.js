const express = require('express');

const userRouter = require('./users.router');
const newsRouter = require('./news.router');
const sliderRouter = require('./sliders.router');
const businessRouter = require('./business.router');
const productsRouter = require('./products.router');
const contactRouter = require('./contacts.router');
const pqrRouter = require('./pqr.router');
const financialRouter = require('./financial.router');
const internalControlRouter = require('./internalControl.router');
const contract = require('./contract.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/news', newsRouter);
  router.use('/sliders', sliderRouter);
  router.use('/business', businessRouter);
  router.use('/products', productsRouter);
  router.use('/contact', contactRouter);
  router.use('/pqrs', pqrRouter);
  router.use('/financial', financialRouter);
  router.use('/internal-control', internalControlRouter);
  router.use('/contract', contract);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
