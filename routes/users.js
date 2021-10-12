const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

router
  .route('/')
  .get(user.getUser)
  .post(user.createUser)
  .put(user.updateUser)
  .delete(user.deleteUser);

module.exports = router;
