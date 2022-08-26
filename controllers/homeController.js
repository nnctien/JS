const Info = require("../models/info");
const Product = require("../models/product");
class HomeController {
  //[Get] /
  async index(req, res, next) {
    try {
      const info = await Info.find({}).lean();
      const product = await Product.find({}).lean();
      res.render("Home");
    } catch (next) {}
  }
}
module.exports = new HomeController();
