const express = require('express');
const router = express.Router();
const oudController = require('../controllers/oudcontroller');
const { isAuthenticated } = require('../middleware/auth');

//View the Ouds
router.get('/', oudController.listOuds);

//Add Form
router.get('/add', isAuthenticated, oudController.showAddForm);

//Handle the Form Submission
router.post('/add', isAuthenticated, oudController.addOud);

//edit form
router.get('/edit/:id', isAuthenticated, oudController.showEditForm);

//Handle the edit submission
router.post('/edit/:id', isAuthenticated, oudController.updateOud);

//Show the delete confirmation
router.get('/delete/:id', isAuthenticated, oudController.showDeletePage);

//delete action
router.post('/delete/:id', isAuthenticated, oudController.deleteOud);

module.exports = router;





