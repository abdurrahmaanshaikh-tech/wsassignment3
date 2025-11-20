require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo ERROR:", err));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Home page
app.get('/', (req, res) => {
  res.render('index');
});

// Oud routes
const oudRoutes = require('./routes/oud');
app.use('/oud', oudRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
