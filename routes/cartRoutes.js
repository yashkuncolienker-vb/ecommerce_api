const express = require('express');
const router = express.Router({ mergeParams: true });
const cart = require('../controllers/cartControllers');
const isLoggedIn = require('../middleware/auth');

router
  .route('/')
  .post(isLoggedIn, cart.createCart)
  .get(isLoggedIn, cart.getCart);
router
  .route('/:id')
  .put(isLoggedIn, cart.updateCart)
  .delete(isLoggedIn, cart.deleteCart);

module.exports = router;
