const Product = require('../models/product');

module.exports.createProduct = async (req, res) => {
  try {
    const product = await new Product({
      user_id: req.usr_id,
      ...req.body,
    }).save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find(req.query);
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted Product');
  } catch (e) {
    res.status(400).send(e.message);
  }
};
