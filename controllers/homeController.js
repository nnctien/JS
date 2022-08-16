
const info = require('../models/info');
const product = require('../models/product');
class HomeController{
    //[Get] /
    index(req, res, next) {
        info.find({}).lean()
            .then((info) =>
                product.find({}).lean()
                    .then((product)=>
                        res.render('home',{product,info})
                    )
                    .catch(next)
            )
            .catch(next)
    }
    }
    
module.exports = new HomeController;
