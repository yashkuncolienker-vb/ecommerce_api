const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const categorySchema = new Schema({
  name: String,
  image: String,
  description: String,
  slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('Category', categorySchema);
