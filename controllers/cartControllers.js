const Cart = require('../models/cart');

module.exports.createCart = async (req, res) => {
  try {
    const cart = await new Cart(req.body).save();
    res.status(201).send(cart);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find(req.query);
    res.status(200).send(cart);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(cart);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted Cart');
  } catch (e) {
    res.status(400).send(e.message);
  }
};
