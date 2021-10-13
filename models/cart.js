const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  product: String,
  user: String,
  product_qty: Number,
  baseprice: Number,
  sellprice: Number,
  totalprice: Number,
});

module.exports = mongoose.model('Cart', cartSchema);
