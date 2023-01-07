const express = require('express');
const BasketController = require('../controllers/basketController');

const router = express.Router();

router.get('/', BasketController.getAll);
router.post('/item', BasketController.addOneItem);
router.delete('/deleteitem/:id', BasketController.deleteOneItem);
router.delete('/order', BasketController.submitOrder);

module.exports = router;
