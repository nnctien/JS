const {MultiMongoosetoObject} = require('../ulti/mongoose')

class HomeController{
    //[Get] /
    index(req, res, next) {
        res.render('home');
    }
}
module.exports = new HomeController;
