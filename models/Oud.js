const mongoose = require('mongoose');

const oudSchema = new mongoose.Schema({
  name: String,
  origin: String,
  size: String,
  stock: Number,
 price: Number,
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Oud', oudSchema);
