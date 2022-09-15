const bcrypt = require("bcryptjs");
var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

// const Account = require("../models/account")
const Account = require("../models/user");
//const Item = require('../models/item')

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await Account.findOne({ username: username }).lean();
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const isMatch = await bcrypt.compare(result.password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, { username: user.username, name: user.name });
});

passport.deserializeUser(function (user, done) {
  return done(null, user);
});

module.exports = passport;
