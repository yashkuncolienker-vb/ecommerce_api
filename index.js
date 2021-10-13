const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { userRoutes, roleRoutes, categoryRoutes } = require('./routes');
require('dotenv').config();
const port = process.env.PORT || 3000;
mongoose.connect(process.env.DB_URL);

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);
app.use('/role', roleRoutes);
app.use('/category', categoryRoutes);

app.listen(port, () => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
  });
});
