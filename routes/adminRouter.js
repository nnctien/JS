const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController')

router.get('/add', AdminController.add);
router.get('/products', AdminController.show);
router.post('/save', AdminController.save);
router.get('/', AdminController.index);

module.exports = router;
