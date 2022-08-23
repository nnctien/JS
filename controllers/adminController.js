const Product = require("../models/product");
const Category = require("../models/category");
class AdminController {
  index(req, res, next) {
    res.render("admin/index", {
      layout: "admin",
    });
  }
  //[Get] /admin/products:
  show(req, res, next) {
    Product.find({})
      .lean()
      .then((product) =>
        res.render("admin/products", {
          layout: "admin",
          product,
        })
      )
      .catch(next);
  }
  //Add new product API:
  //[Get] /product/add
  add(req, res, next) {
    res.render("admin/addNewProduct", {
      layout: "admin",
    });
  }
  //[Get /product/edit/:id]
  edit(req, res, next) {
    Product.findById({ _id: req.params.id })
      .lean()
      .then((product) =>
        res.render("admin/editProduct", {
          layout: "admin",
          product,
        })
      )
      .catch(next);
  }
  //[POST] /product/save
  save(req, res, next) {
    const product = new Product(req.body);
    product.save(function (err) {
      if (!err) res.redirect("/admin/products");
      else res.send("Can not save this product");
    });
  }
  //[POST] /save/:id
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
