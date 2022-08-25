const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
//
router.get("/", authController.register);
router.post("/save", authController.saveUser);

module.exports = router;
