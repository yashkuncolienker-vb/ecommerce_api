const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {
  userRoutes,
  roleRoutes,
  categoryRoutes,
  tagRoutes,
  cartRoutes,
  orderRoutes,
} = require('./routes');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/user', userRoutes);
app.use('/role', roleRoutes);
app.use('/category', categoryRoutes);
app.use('/tag', tagRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);

app.listen(port, () => {
  mongoose.connect(process.env.DB_URL);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
  });
});
