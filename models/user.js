const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  profileimage: String,
  role: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);
