const express = require('express');
const router = express.Router({ mergeParams: true });
const order = require('../controllers/orderControllers');
const isLoggedIn = require('../middleware/auth');

router
  .route('/')
  .post(isLoggedIn, order.createOrder)
  .get(isLoggedIn, order.getOrder);
router
  .route('/:id')
  .put(isLoggedIn, order.updateOrder)
  .delete(isLoggedIn, order.deleteOrder);

module.exports = router;
