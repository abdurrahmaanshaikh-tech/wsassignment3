const express = require('express');
const router = express.Router();
const oudController = require('../controllers/oudcontroller');

router.get('/', oudController.list);

module.exports = router;