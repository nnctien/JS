const Product = require("../models/product");
const User = require("../models/user");
class OrderController {
  //[Get]: /checkout
  checkout(req, res, next) {
    res.render("checkout");
  }
  shopcart(req, res, next) {
    res.render("shop-cart");
  }
}
module.exports = new OrderController();
