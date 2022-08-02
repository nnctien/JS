const {MultiMongoosetoObject} = require('../ulti/mongoose')

class HomeController{
    //[Get] /
    index(req, res, next) {
        res.render('home')
    }
    check(req, res, next){
        res.send("Thanh cong")
    }
}
module.exports = new HomeController;
