const { Router } =  require('express');
const route = Router();
const { jwtValidator } = require('../middleware/jwt');
const { getPurchases, createPayment } = require('../controllers/purchase')

route
  .get('/', jwtValidator, getPurchases)
  .post('/', jwtValidator, createPayment)

module.exports = route;
