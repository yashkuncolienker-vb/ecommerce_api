const express = require('express');
const router = express.Router({ mergeParams: true });
const category = require('../controllers/categoryControllers');
const isLoggedIn = require('../middleware/auth');

router
  .route('/')
  .post(isLoggedIn, category.createCategory)
  .get(isLoggedIn, category.getCategory);
router
  .route('/:id')
  .put(isLoggedIn, category.updateCategory)
  .delete(isLoggedIn, category.deleteCategory);

module.exports = router;
