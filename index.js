const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(process.env.PORT || 3000, () => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
  });
});
