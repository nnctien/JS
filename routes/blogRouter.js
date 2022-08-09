const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
//
router.get('/:id', blogController.showBlog);
router.get('/', blogController.index);

module.exports = router;
