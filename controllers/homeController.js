const {MultiMongoosetoObject} = require('../ulti/mongoose');
const info = require('../models/info');
class HomeController{
    //[Get] /
    index(req, res, next) {
        info.find({})
            .then(info => res.render('home'))
            .catch(next)
        //res.render('home');
    }
    
}
module.exports = new HomeController;
