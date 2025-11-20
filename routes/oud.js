const express = require('express');
const router = express.Router();
const oudController = require('../controllers/oudcontroller');

// View all Ouds
router.get('/', oudController.listOuds);

module.exports = router;

// Show Add Form
router.get('/add', oudController.showAddForm);

// Handle Form Submission
router.post('/add', oudController.addOud);

// Show edit form
router.get('/edit/:id', oudController.showEditForm);

// Handle edit submission
router.post('/edit/:id', oudController.updateOud);

// Show delete confirmation page
router.get('/delete/:id', oudController.showDeletePage);

// Handle delete action
router.post('/delete/:id', oudController.deleteOud);
