const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
//
router.get("/", authController.login);
router.post("/", authController.checkLogin);

module.exports = router;
