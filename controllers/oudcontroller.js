const Oud = require('../models/Oud');

exports.listOuds = async (req, res) => {
  try {
    const items = await Oud.find();     // find all oud items
    res.render('oud/list', { items });  // send data to EJS view
  } catch (error) {
    console.error("Error loading inventory:", error);
    res.status(500).send("Server Error");
  }
};
// Show Add Form
exports.showAddForm = (req, res) => {
  res.render('oud/add');
};

// Handle Add Oud Submission
exports.addOud = async (req, res) => {
  try {
    const { name, origin, stock, price } = req.body;

    const newOud = new Oud({
      name,
      origin,
      stock,
      price
    });

    await newOud.save();

    res.redirect('/oud');  // go back to inventory
  } catch (error) {
    console.error("Error adding oud:", error);
    res.status(500).send("Server Error");
  }
};

// Show Edit Form
exports.showEditForm = async (req, res) => {
  try {
    const oud = await Oud.findById(req.params.id);
    res.render('oud/edit', { oud });
  } catch (error) {
    console.error("Error loading oud:", error);
    res.status(500).send("Server Error");
  }
};

// Handle edit submission
exports.updateOud = async (req, res) => {
  try {
    const { name, origin, stock, price } = req.body;

    await Oud.findByIdAndUpdate(req.params.id, {
      name,
      origin,
      stock,
      price
    });

    res.redirect('/oud');
  } catch (error) {
    console.error("Error updating oud:", error);
    res.status(500).send("Server Error");
  }
};
// Show delete confirmation page
exports.showDeletePage = async (req, res) => {
  try {
    const oud = await Oud.findById(req.params.id);
    res.render('oud/delete', { oud });
  } catch (error) {
    console.error("Error displaying delete page:", error);
    res.status(500).send("Server Error");
  }
};

// Handle delete
exports.deleteOud = async (req, res) => {
  try {
    await Oud.findByIdAndDelete(req.params.id);
    res.redirect('/oud');
  } catch (error) {
    console.error("Error deleting:", error);
    res.status(500).send("Server Error");
  }
};
