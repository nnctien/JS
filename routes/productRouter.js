const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/add', productController.add);
router.get('/:id', productController.show);
router.get('/', productController.index);
module.exports = router;

