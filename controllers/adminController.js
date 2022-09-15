//
//This is for creating CRUD api for product
//
const Product = require("../models/product");
const Category = require("../models/category");
const Gender = require("../models/gender");
const Inventory = require("../models/inventory");
class AdminController {
  //[Get] /admin:
  index(req, res, next) {
    res.render("admin/index", {
      layout: "admin",
    });
  }
  //
  //This is for creating CRUD api for product
  //[Get] /admin/products:
  async show(req, res, next) {
    const product = await Product.find({}).lean();
    const categories = await Category.find({}).lean();
    const inventory = await Inventory.find({}).lean()
    res.render("admin/products", {
      layout: "admin",
      product,
      categories,
      inventory,
    });
  }
  //Add new product API:
  //[Get] /product/add
  async add(req, res, next) {
    const categories = await Category.find({}).lean();
    const gender = await Gender.find({}).lean();
    res.render("admin/addNewProduct", {
      layout: "admin",
      gender,
      categories,
    });
  }
  //[Get /product/edit/:id]
  async edit(req, res, next) {
    const product = await Product.findById({ _id: req.params.id }).lean();
    const gender = await Gender.find({}).lean();
    const categories = await Category.find({}).lean();
    res.render("admin/editProduct", {
      layout: "admin",
      product,
      gender,
      categories,
    });
  }
  //[POST] /product/save
  //Save new product
  async save(req, res, next) {
    const product = new Product(req.body);
    const inventory = new Inventory({
      productId : req.body._id,
      quantity : req.body.quantity
    })
    product.save(function (err) {
      if (!err) res.redirect("back");
      else res.send("Can not save this product");
    });
    await inventory.save();
  }
  //[POST] /save/:id
  //Save updated product
  saveEdited(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .lean()
      .then(() => res.redirect("/admin/products"))
      .catch(next);
  }
  // [DETETE] product/delete/:id
  delete(req, res, next) {
    Product.deleteById(req.params.id)
      .then(() => res.redirect("back"))
      .catch(next);
    Inventory.deleteById({ _id: req.params.id });
  }
}
module.exports = new AdminController();
