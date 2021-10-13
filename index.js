const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const {
  userRoutes,
  roleRoutes,
  categoryRoutes,
  tagRoutes,
} = require('./routes');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);
app.use('/role', roleRoutes);
app.use('/category', categoryRoutes);
app.use('/tag', tagRoutes);

app.listen(port, () => {
  mongoose.connect(process.env.DB_URL);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
  });
});
