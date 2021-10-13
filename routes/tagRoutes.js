const express = require('express');
const router = express.Router({ mergeParams: true });
const tag = require('../controllers/tagControllers');
const isLoggedIn = require('../middleware/auth');

router.route('/').post(isLoggedIn, tag.createTag).get(isLoggedIn, tag.getTag);
router
  .route('/:id')
  .put(isLoggedIn, tag.updateTag)
  .delete(isLoggedIn, tag.deleteTag);

module.exports = router;
