const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.registerUser = async (req, res) => {
  try {
    const usrInDB = await User.findOne({ email: req.body.email });
    if (usrInDB) {
      return res.status(400).send('User Already Exist. Please Login');
    }
    password = await bcrypt.hash(req.body.password, 10);
    const newUser = await new User({ ...req.body, password }).save();
    const { _id, email } = newUser;
    const token = jwt.sign({ _id, email }, process.env.TOKEN_KEY, {
      expiresIn: '30d',
    });
    res.status(201).send(token);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send('email & password is required');
    }
    const usrInDB = await User.findOne({ email });
    if (usrInDB && (await bcrypt.compare(password, usrInDB.password))) {
      const token = jwt.sign(
        { _id: usrInDB._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '30d',
        }
      );
      res.status(200).send(token);
    }
  } catch (e) {
    res.status(400).send('Invalid credentials');
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const users = await User.findById(req.usr_id);
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.usr_id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.usr_id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
