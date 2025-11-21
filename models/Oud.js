const mongoose = require('mongoose'); //imports mongoose

const oudSchema = new mongoose.Schema({ //creates the schema for oud items
  name: String,
  origin: String,
  size: String,
  stock: Number,
 price: Number,
  dateAdded: { type: Date, default: Date.now } //automatically adds the date the item was added
});

module.exports = mongoose.model('Oud', oudSchema); //exports the model to be used in other files
