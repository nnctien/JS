const {MultiMongoosetoObject} = require('../ulti/mongoose');

class BlogController{
    //[Get] /
    index(req, res, next) {
        res.render('blog');
    }
    showBlog(req, res, next) {
        res.render('blog-details');
    }
}
module.exports = new BlogController
