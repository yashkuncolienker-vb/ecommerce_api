const Order = require('../models/order');

module.exports.createOrder = async (req, res) => {
  try {
    const order = await new Order({ user_id: req.usr_id, ...req.body }).save();
    res.status(201).send(order);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.getOrder = async (req, res) => {
  try {
    const order = await Order.find(req.query);
    res.status(200).send(order);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(order);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted Order');
  } catch (e) {
    res.status(400).send(e.message);
  }
};
