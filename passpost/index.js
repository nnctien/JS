const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/user");

passport.use(
  new LocalStrategy(
    async function (username, password, done) {
    try {
      const user = await User.findOne({ username: username }).lean();
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const isMatch = await bcrypt.compare(result.password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    } 
    catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, { id: user._id });
});

passport.deserializeUser( (username, done) => {
  //check username
  if(username === user.username){
      return done(null, {
          username,
          active: true
      })
  }
  done(null, false)
});


module.exports = passport;
