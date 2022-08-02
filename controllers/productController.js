const {MultiMongoosetoObject} = require('../ulti/mongoose')

class ProductController{
    //[Get] /product
    index(req, res, next) {
        res.render('product-details')
    }
    
}
module.exports = new ProductController;