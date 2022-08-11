
const info = require('../models/info');
const product = require('../models/product');
class HomeController{
    //[Get] /
    index(req, res, next) {
        info.find({}).lean()
            .then((info)  )
            .catch(next)
        product. find({}).lean()
            .then((product))
            .catch(next)
        res.render('home')
            //res.json(Info)
    }
    }
    
module.exports = new HomeController;
