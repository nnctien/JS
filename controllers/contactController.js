const {MultiMongoosetoObject} = require('../ulti/mongoose')

class ContactController{
    //[Get] /contact
    showContact(req, res, next) {
        res.render('contact');
    }
}
module.exports = new ContactController;
