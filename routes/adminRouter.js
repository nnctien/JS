const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");
//Add a new product
router.get("/products/add", AdminController.add);
//Get list of product
router.get("/products", AdminController.show);
//Save product which is just created to db
router.post("/products/save", AdminController.save);
//Edit product
router.get("/products/:id", AdminController.edit);
//Save product that just edited
router.put("/save/:id", AdminController.saveUpdatedProduct);
//
router.delete("/products/:id", AdminController.delete);
//Get dashboard site
router.get("/", AdminController.index);

module.exports = router;
