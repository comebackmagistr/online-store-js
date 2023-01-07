const express = require('express');
const BasketController = require('../controllers/basketController');

const router = express.Router();

router.get('/', BasketController.getAll);
router.post('/item', BasketController.addOneItem);
router.delete('/deleteitem/:id', BasketController.deleteOneItem);

module.exports = router;
