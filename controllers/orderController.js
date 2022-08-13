const Product = require('../models/product')
const User = require('../models/user')
class OrderController{

    checkout(req, res, next) {
        res.render('checkout')
    }
}
module.exports = new OrderController;
