const info = require("../models/info");
class ContactController {
  //[Get] /contact
  showContact(req, res, next) {
    info
      .findOne({})
      .lean()
      .then((info) =>
        //res.json(info)
        res.render("contact", { info })
      )
      .catch(next);
  }
}
module.exports = new ContactController();
