const express = require('express');
const router = express.Router({ mergeParams: true });
const product = require('../controllers/productControllers');
const isLoggedIn = require('../middleware/auth');

router
  .route('/')
  .post(isLoggedIn, product.createProduct)
  .get(isLoggedIn, product.getProduct);
router
  .route('/:id')
  .put(isLoggedIn, product.updateProduct)
  .delete(isLoggedIn, product.deleteProduct);

module.exports = router;
