const {MultiMongoosetoObject} = require('../ulti/mongoose')

class UserController{
    //[Get] /register
    index(req, res, next) {
        res.render('register')
    }
    
}
module.exports = new UserController;