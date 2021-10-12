const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
  });
});
