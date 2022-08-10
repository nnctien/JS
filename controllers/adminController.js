const Product = require('../models/product')
class AdminController{
    index(req, res, next) {
        res.render('admin/index',{
            layout: false
        })
    }
    //[Get] /admin/products:
    show(req, res, next) {
        Product.find({}).lean()
            .then((product) =>
            res.render('admin/products',{
                layout: false,
                product
            })
            )

    }
    //Add new product API:
    //[Get] /product/add
    add(req, res, next) {
        res.render('admin/addNewProduct',{
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
module.exports = new AdminController;