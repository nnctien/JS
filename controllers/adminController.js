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

    const product = await Product.find({deleted: false}).lean();
    const categories = await Category.find({}).lean();
    const inventory = await Inventory.find({}).lean();

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
      productId : product._id,
      quantity : req.body.quantity
    })
    try {
      await product.save();
      await inventory.save();
      res.redirect("back");
    }
    catch(next){

    }
  }
  //[POST] /save/:id
  //Save updated product
  async saveEdited(req, res, next) {
    await Product.updateOne({ _id: req.params.id }, req.body)
    await Inventory.updateOne({ productId: req.params.id }, {
      quantity: req.body.quantity,
    })
    res.redirect("/admin/products")
  }
  // [DETETE] product/delete/:id
  delete(req, res, next) {
    try{
      
      Product.delete( {_id : req.params.id} )
      Inventory.delete( {productId: req.params.id} );
      res.redirect("back");
    }
    catch (next){}
  }
}
module.exports = new AdminController();
