const express = require('express');

const router = express.Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const cathegoryRouter = require('./cathegoryRouter');
const basketRouter = require('./basketRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/cathegory', cathegoryRouter);
router.use('/basket', basketRouter);

module.exports = router;
