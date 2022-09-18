require("dotenv").config();
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
class AuthController {
  ///REGISTER:
  //[Get] /register
  register(req, res, next) {
    res.render("register");
  }
  //[Post] /auth
  async saveUser(req, res, next) {
    const username = req.body.username.toLowerCase();
    const check = await User.findOne({ username: username });
    if (check == null) {
      const user = new User(req.body);
      await user.save();
      res.render("accountCreate");
    } else {
      res.send("This username is not available");
    }
  }
  //////////LOGIN
  //[Get] /login
  login(req, res, next) {
    res.render("login");
  }
  //[Post] /login
  async checkLogin(req, res, next) {
    const result = req.body;
    const user = await User.findOne({ username: result.username });

    //if (!user) throw createError.NotFound("User not registered");
    if (!user) {
      res.send("Check your username");
    } else {
      const isMatch = await bcrypt.compare(result.password, user.password);
      if (!isMatch) {
        return res.status(401).send("Your password is incorrect!");
      } else {
        var token = jwt.sign({ username: user.username }, accessTokenSecret, {
          expiresIn: accessTokenLife,
        });
        //req.session.user = user;
        return res.send(token);
      }
    }
  }
}
module.exports = new AuthController();
