const mongoose = require("mongoose");

const genderSchema = new mongoose.Schema(
  {
    index: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "gender",
  }
);

module.exports = mongoose.model("gender", genderSchema);
