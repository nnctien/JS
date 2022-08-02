const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
//
router.get('/shop', shopController.index);

module.exports = router;
