const express = require('express');
const router = express.Router({ mergeParams: true });
const user = require('../controllers/userControllers');

router.post('/', user.createUser);
router.get('/', user.getUser);
router
  .route('/:id')
  // .get(user.getUser)
  .put(user.updateUser)
  .delete(user.deleteUser);

module.exports = router;
