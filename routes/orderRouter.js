const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
//
router.get('/checkout', orderController.checkout);
router.get('/shopcart', orderController.shopcart);

module.exports = router;
