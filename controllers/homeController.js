const {MultiMongoosetoObject} = require('../ulti/mongoose');
const info = require('../models/info');
const product = require('../models/product');
class HomeController{
    //[Get] /
    index(req, res, next) {
        info.find({}).lean()
            .then(info => info = info)
            .catch(next)
        product. find({}).lean()
            .then(products => products = products)
            .catch(next)
        res.json(info)
        }
    }
    
module.exports = new HomeController;
