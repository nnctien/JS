
const Product = require('../models/product')

class ShopController{
    //[Get] /
    index(req, res, next) {
        Product.find({}).lean()
            .then((product)=>
                res.render('shop', {product})
            )
            .catch(next)

    }
}
module.exports = new ShopController;

