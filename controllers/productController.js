const {MultiMongoosetoObject} = require('../ulti/mongoose')
const Product = require('../models/product')
class ProductController{
    //[Get] /product
    index(req, res, next) {
        res.render('product-details');
    }
    //[Get] /product/:id
    show(req, res, next) {
        Product.findOne({ id : req.params.id}).lean()
            .then( 
                (product) =>
                    res.render('product-details', {product})
                )
            .catch(next);
        }



    //Add new product API:
    //[Get] /product/add
    add(req, res, next) {
        res.render('addNewProduct',{
            layout: false
        })
    }
    //[POST] /product/save
    save(req, res, next) {
        const formData = req.body;
        const product = new Product(formData)
        product.save( function(err){
            if (!err) res.json(product) 
            else res.send('Can not save this document');   
    });
    }
}
module.exports = new ProductController;
