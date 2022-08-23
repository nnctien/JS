class UserController {
  //[Get] /register
  register(req, res, next) {
    res.render("register");
  }
  login(req, res, next) {
    res.render("login");
  }
}
module.exports = new UserController();
