const express = require('express');
const router = express.Router({ mergeParams: true });
const user = require('../controllers/userControllers');
const isLoggedIn = require('../middleware/auth');

router.route('/').post(isLoggedIn, user.getUser);

//   .get(isLoggedIn, user.getUser)
//   .put(isLoggedIn, user.updateUser)
//   .delete(isLoggedIn, user.deleteUser);

module.exports = router;
