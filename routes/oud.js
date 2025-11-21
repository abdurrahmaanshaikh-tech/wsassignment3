const express = require('express');
const router = express.Router();
const oudController = require('../controllers/oudcontroller');

//View the Ouds
router.get('/', oudController.listOuds);

module.exports = router;

//Add Form
router.get('/add', oudController.showAddForm);

//Handle the Form Submission
router.post('/add', oudController.addOud);

//edit form
router.get('/edit/:id', oudController.showEditForm);

//Handle the edit submission
router.post('/edit/:id', oudController.updateOud);

//Show the delete confirmation 
router.get('/delete/:id', oudController.showDeletePage);

//delete action
router.post('/delete/:id', oudController.deleteOud);
