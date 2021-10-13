const express = require('express');
const router = express.Router({ mergeParams: true });
const role = require('../controllers/roleControllers');
const isLoggedIn = require('../middleware/auth');

router
  .route('/')
  .post(isLoggedIn, role.createRole)
  .get(isLoggedIn, role.getRole);
router
  .route('/:id')
  .put(isLoggedIn, role.updateRole)
  .delete(isLoggedIn, role.deleteRole);

module.exports = router;
