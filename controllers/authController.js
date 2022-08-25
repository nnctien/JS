const User = require("../models/user");

class AuthController {
  //[Get] /register
  register(req, res, next) {
    res.render("register");
  }
  //[Get] /login
  login(req, res, next) {
    res.render("login");
  }
  //[Post] /auth
  async saveUser(req, res, next) {
    const user = new User(req.body);
    try {
      await user.save();
      res.send("Thanh cong");
    }
    catch {
      res.send("That bai");
    }
  };


}
module.exports = new AuthController();
