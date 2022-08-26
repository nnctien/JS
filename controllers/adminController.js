const Product = require("../models/product");
const Category = require("../models/category");
class AdminController {
  //[Get] /admin:
  index(req, res, next) {
    res.render("admin/index", {
      layout: "admin",
    });
  }
  //[Get] /admin/products:
  async show(req, res, next) {
    const product = await Product.find({}).lean();
    const categories = await Category.find({}).lean();

        res.render("admin/products", {
          layout: "admin",
          product,
          categories,
        })
  }
  //Add new product API:
  //[Get] /product/add
  add(req, res, next) {
    res.render("admin/addNewProduct", {
      layout: "admin",
    });
  }
  //[Get /product/edit/:id]
  async edit(req, res, next) {
    const product = await Product.findById({ _id: req.params.id }).lean()
    res.render("admin/editProduct", {
      layout: "admin",
      product,
    });
  }
  //[POST] /product/save
  //Save new product
  save(req, res, next) {
    const product = new Product(req.body);
    product.save(function (err) {
      if (!err) res.redirect("/admin/products");
      else res.send("Can not save this product");
    });
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
    Product.deleteOne({ _id: req.params.id })
      .lean()
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new AdminController();
