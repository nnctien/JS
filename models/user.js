const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// tài khoản sẽ đăng nhập = account và password

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: false,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
});

userSchema.plugin(passportLocalMongoose);

if (mongoose.models.userSchema) {
  User = mongoose.model("User");
} else {
  User = mongoose.model("User", userSchema);
}

module.exports = mongoose.model("User", userSchema);
