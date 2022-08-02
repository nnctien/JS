const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
//
router.get('/product', productController.index);

module.exports = router;
