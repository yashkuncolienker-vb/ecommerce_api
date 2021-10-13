const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const roleSchema = new Schema({
  name: String,
  slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('Role', roleSchema);
