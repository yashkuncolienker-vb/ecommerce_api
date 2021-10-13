const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  user_id: String,
  total_items: Number,
  products: [String],
  billing_address: String,
  shipping_address: String,
  transaction_status: {
    type: String,
    enum: ['Successful', 'Failed', 'Pending'],
  },
  payment_mode: {
    type: String,
    enum: ['UPI', 'Credit/Debit Card', 'COD', 'NetBanking'],
  },
  payment_status: Boolean,
  order_status: {
    type: String,
    enum: ['Placed', 'NotPlaced'],
  },
});

module.exports = mongoose.model('Order', orderSchema);
