const express = require('express');
const router = express.Router();
const addProductController = require('../controllers/addProductController');
//
router.get('/', addProductController.index);
router.post('/', addProductController.save);
module.exports = router;
