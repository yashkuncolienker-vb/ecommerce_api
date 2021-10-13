const Role = require('../models/role');

module.exports.createRole = async (req, res) => {
  try {
    const role = await new Role({ name: req.body.name }).save();
    res.status(201).send(role);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.getRole = async (req, res) => {
  try {
    const role = await Role.find(req.query);
    res.status(200).send(role);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.updateRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(role);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted Role');
  } catch (e) {
    res.status(400).send(e.message);
  }
};
