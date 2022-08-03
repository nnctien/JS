const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
//
router.get('/', blogController.showBlog);
router.get('/:id', blogController.showBlog);
module.exports = router;
