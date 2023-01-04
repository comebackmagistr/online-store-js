const express = require('express');
const cathegoryController = require('../controllers/cathegoryController');

const router = express.Router();

router.get('/', cathegoryController.getAll);

module.exports = router;
