const {MultiMongoosetoObject} = require('../ulti/mongoose')
const Product = require('../models/product')
class ProductController{
    //[Get] /product
    index(req, res, next) {
        res.render('product-details');
    }
    show(req, res, next) {
        Product.findOne({ id : req.params.id}).lean()
            .then( 
                (product) =>
                    res.render('product-details', {product})
                )
            .catch(next);

    }
    save(req, res, next) {
        const formData = req.body;
        const product = new Product(formData)
        product.save()
        res.json(product)
    }
    add(req, res, next) {
        res.render('addNewProduct',{
            layout: false
        })
    }
}
module.exports = new ProductController;
