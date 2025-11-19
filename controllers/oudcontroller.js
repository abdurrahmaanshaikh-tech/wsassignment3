const Oud = require('../models/Oud');

exports.list = async (req, res) => {
  const items = await Oud.find();   // get all oud items
  res.render('oud/list', { items }); // send to EJS
};
