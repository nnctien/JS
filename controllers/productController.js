const Product = require('../models/product')
class ProductController{
    //[Get] /product/:id
    show(req, res, next) {
        Product.findById({ _id : req.params.id}).lean()
            .then( (product) =>
                    res.render('product-details', {product})
                )
            .catch(next);
        }
}
module.exports = new ProductController;
