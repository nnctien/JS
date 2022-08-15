const Product = require('../models/product')
const Category = require('../models/category')
class AdminController{
    index(req, res, next) {
        res.render('admin/index',{
            layout: 'admin'
        })
    }
    //[Get] /admin/products:
    show(req, res, next) {
        Product.find({}).lean()
            .then( (product) =>
            res.render('admin/products',{
                layout: 'admin',
                product
            })
            )
            .catch(next)

    }
    //Add new product API:
    //[Get] /product/add
    add(req, res, next) {
        res.render('admin/addNewProduct',{
            layout: false
        })
    }    
    //[Get /product/edit/:id]
    edit(req, res, next) {
        Product.findOne({_id: req.params.id}).lean()
         .then((product)=>
            res.render('admin/editProduct',{
                layout: 'admin',
                product

            }))
        .catch(next)
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
