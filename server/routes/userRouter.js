const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/check', userController.check);
router.get('/logout', userController.logout);
router.patch('/order', userController.order);

module.exports = router;
