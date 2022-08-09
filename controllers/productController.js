const {MultiMongoosetoObject} = require('../ulti/mongoose')
const Products = require('../models/product')
class ProductController{
    //[Get] /product
    index(req, res, next) {
        res.render('product-details');
    }
    show(req, res, next) {
        Products.findOne({ _id : req.params._id}).lean()
            .then( 
                (product) =>
                    res.render('product-details', {product})
                )
            .catch(next);

    }
    add(req, res, next) {
        res.render('addNewProduct',{
            layout: false
        })
    }
}
module.exports = new ProductController;
