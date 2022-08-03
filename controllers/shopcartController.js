const {MultiMongoosetoObject} = require('../ulti/mongoose');

class ShopcartController{
    //[Get] /Shopcart
    index(req, res, next) {
        res.render('shop-cart');
    }
}
module.exports = new ShopcartController;
