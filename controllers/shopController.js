const Product = require("../models/product");
const Category = require("../models/category")
class ShopController {
  //[Get] /
  async index(req, res, next) {
    try{
      const product = await Product.find({}).lean();
      const category = await Category.find({}).lean();
      res.render("shop", {
        product,
        category
      })
    }
    catch(next){}
  }
  async women(req, res, next) {
    try{
      const product = await Product.find({gender: women}).lean();
      const category = await Category.find({}).lean();
      res.render("shop", {
        product,
        category
      })
    }
    catch(next){}
  }
}
module.exports = new ShopController();
