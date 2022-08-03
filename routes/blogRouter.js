const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
//
router.get('/', blogController.index);
router.get('/:id', blogController.showBlog);
module.exports = router;
