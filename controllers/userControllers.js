const User = require('../models/user');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports.createUser = async (req, res) => {
  try {
    const usrInDB = await User.findOne({ email: req.body.email });
    if (usrInDB) {
      return res.status(400).send('User Already Exist. Please Login');
    }
    password = await bcrypt.hash(req.body.password, 10);
    const newUser = await new User({ ...req.body, password }).save();
    const token = sign({newUser._id, newUser.email })
    res.status(201).send(newUser);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    // const users = await User.findById(req.params.id);
    const users = await User.find({});

    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const users = await User.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};
