const {MultiMongoosetoObject} = require('../ulti/mongoose')

class ProductController{
    //[Get] /product
    index(req, res, next) {
        res.render('product-details');
    }
    add(req, res, next) {
        res.render('addNewProduct',{
            layout: false
        })
    }
}
module.exports = new ProductController;
