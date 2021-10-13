const Category = require('../models/category');

module.exports.createCategory = async (req, res) => {
  try {
    const category = await new Category(req.body).save();
    res.status(201).send(category);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.getCategory = async (req, res) => {
  try {
    const category = await Category.find(req.body);
    res.status(200).send(category);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(category);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).send(category);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
