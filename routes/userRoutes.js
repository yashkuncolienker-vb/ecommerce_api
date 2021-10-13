const express = require('express');
const router = express.Router({ mergeParams: true });
const user = require('../controllers/userControllers');
const isLoggedIn = require('../middleware/auth');

router.post('/register', user.registerUser);
router.post('/login', user.loginUser);

router
  .route('/')
  .get(isLoggedIn, user.getUser)
  .put(isLoggedIn, user.updateUser)
  .delete(isLoggedIn, user.deleteUser);

module.exports = router;
