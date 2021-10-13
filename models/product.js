const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    thumbnail: String,
    product_gallery: [String],
    description: String,
    base_price: Number,
    sell_price: Number,
    category_name: String,
    tags: [String],
    additional_information: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
