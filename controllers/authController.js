const createError = require("http-errors");
const User = require("../models/user");
class AuthController {
  //[Get] /register
  register(req, res, next) {
    res.render("register");
  }
   //[Post] /auth
  async saveUser(req, res, next) {
      // const result = await User.validateAsync(req.body)
      // const doesExist = await User.findOne({ username: result.username })
      // if (doesExist)
      //   throw createError.Conflict(`${result.username} is already been registered`)
      const username = req.body.username.toLowerCase();
      const check = await User.find({username: username}).lean();
      res.send(check , check == null)
      // if (check == null)
      // { 
      //   const user = new User(req.body); 
      //   await user.save();
      //   res.send("Your account created");}
      // else {
      //   res.send("Goy xong");
      // }
  }

  //[Get] /login
  login(req, res, next) {
    res.render("login");
  }
  //[Post] /login
  async checkLogin(req, res, next) {
    const user = req.body;
    const check = await User.find({username: user.username}).lean();
    if (!check) {
      return res.send("Username does not exist")
    };
    const isPasswordValid = User.isPasswordValid(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Mật khẩu không chính xác.');
    }
    else{
      res.send('Oke')
    }
    }

}
module.exports = new AuthController();
