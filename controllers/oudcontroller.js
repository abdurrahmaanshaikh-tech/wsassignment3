const Oud = require('../models/Oud');  //makes sure to get the right file

exports.listOuds = async (req, res) => {
  try {
    const items = await Oud.find();     //finds all the oud items
    res.render('oud/list', { items });  //sends data to the EJS view
  } catch (error) {
    console.error("Error loading inventory:", error);  //handles the error
    res.status(500).send("Server Error");
  }
};
//Shows the Add Form
exports.showAddForm = (req, res) => {
  res.render('oud/add');
};

//Handles the Add Oud Submission
exports.addOud = async (req, res) => {
  try {
    const { name, origin, stock, price } = req.body;  //gets the data from the form

    const newOud = new Oud({ //gets the info for the new oud
      name,
      origin,
      stock,
      price
    });

    await newOud.save(); //saves the new oud to the database

    res.redirect('/oud');  //go back to inventory
  } catch (error) {
    console.error("Error adding oud:", error);
    res.status(500).send("Server Error");
  }
};

//show Edit Form
exports.showEditForm = async (req, res) => { //loads the oud to be edited
  try {
    const oud = await Oud.findById(req.params.id);
    res.render('oud/edit', { oud });
  } catch (error) {
    console.error("Error loading oud:", error);
    res.status(500).send("Server Error");
  }
};

//Handles the edit submission
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
//Shows the delete confirmation page
exports.showDeletePage = async (req, res) => {
  try {
    const oud = await Oud.findById(req.params.id);
    res.render('oud/delete', { oud });
  } catch (error) {
    console.error("Error displaying delete page:", error);
    res.status(500).send("Server Error");
  }
};

//properly handles the delete action
exports.deleteOud = async (req, res) => {
  try {
    await Oud.findByIdAndDelete(req.params.id);
    res.redirect('/oud');
  } catch (error) {
    console.error("Error deleting:", error);
    res.status(500).send("Server Error");
  }
};
