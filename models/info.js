const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  descreption: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("info", infoSchema);
