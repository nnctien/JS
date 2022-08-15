const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController')
//Add a new product
router.get('/add', AdminController.add);
//Get list of product
router.get('/products', AdminController.show);
//Save product is just created to db
router.post('/save', AdminController.save);
//Edit product
router.get('/products/:id', AdminController.edit);
//Save product that just edited
router.post('/save/:id', AdminController.saveEdited);
//Get dashboard site
router.get('/', AdminController.index);

module.exports = router;
