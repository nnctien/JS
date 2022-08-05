
const user = require('../models/')
class BlogController{
    //[Get] /
    index(req, res, next) {
        res.render('addNewProduct', {
            layout: false
        });
    }
    save(req, res, next) {
    }
}
module.exports = new BlogController
