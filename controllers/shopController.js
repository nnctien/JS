const {MultiMongoosetoObject} = require('../ulti/mongoose')

class ShopController{
    //[Get] /
    index(req, res, next) {
        res.render('shop')
    }
}
module.exports = new ShopController
