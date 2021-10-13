require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/user', routes.userRoutes);
app.use('/role', routes.roleRoutes);
app.use('/category', routes.categoryRoutes);
app.use('/tag', routes.tagRoutes);
app.use('/cart', routes.cartRoutes);
app.use('/order', routes.orderRoutes);
app.use('/product', routes.productRoutes);

app.listen(port, () => {
  mongoose.connect(process.env.DB_URL);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
  });
});
