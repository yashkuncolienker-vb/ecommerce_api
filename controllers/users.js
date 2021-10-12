const User = require('../models/user');

module.exports.createUser = async (req, res) => {
  try {
    const newUser = await new User(req.body).save();
    res.status(201).send(newUser);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(
      '61654e145dd382cae08812c5',
      req.body,
      { runValidators: true, new: true }
    );
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const users = await User.findByIdAndDelete('6165536b74263b15ef0b788b');
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};
