const express = require("express");
const router = express.Router();
const shopcartController = require("../controllers/shopcartController");
//
router.get("/", shopcartController.index);

module.exports = router;
