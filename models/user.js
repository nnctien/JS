const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
//Decode:
const bcrypt = require("bcryptjs");
const saltRounds = 10;

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
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    bcrypt: true,
  },
  status: {
    type: String,
    trim: true,
  },
});

userSchema.plugin(passportLocalMongoose);

userSchema.pre('save', async function (next) {
  try {
    /* 
    Here first checking if the document is new by using a helper of mongoose .isNew, therefore, this.isNew is true if document is new else false, and we only want to hash the password if its a new document, else  it will again hash the password if you save the document again by making some changes in other fields incase your document contains other fields.
    */
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.password, salt)
      this.password = hashedPassword
    }
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw error
  }
}


if (mongoose.models.userSchema) {
  User = mongoose.model("User");
} else {
  User = mongoose.model("User", userSchema);
}

module.exports = mongoose.model("User", userSchema);
