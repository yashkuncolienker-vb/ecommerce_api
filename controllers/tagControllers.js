const Tag = require('../models/tag');

module.exports.createTag = async (req, res) => {
  try {
    const tag = await new Tag({ name: req.body.name }).save();
    res.status(201).send(tag);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.getTag = async (req, res) => {
  try {
    const tag = await Tag.find(req.body);
    res.status(200).send(tag);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.updateTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(tag);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.deleteTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    res.status(200).send(tag);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
