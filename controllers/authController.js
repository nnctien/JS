const createError = require('http-errors')
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
  async saveUser (req, res, next) {
    try {
      // const result = await User.validateAsync(req.body)
      // const doesExist = await User.findOne({ username: result.username })
      // if (doesExist)
      //   throw createError.Conflict(`${result.username} is already been registered`)
      const user = new User(req.body);
      await user.save();
      res.render("accountCreated");
    } 
    catch (err) {
      res.send("Can't save this account");
    }
  }
}
module.exports = new AuthController();
