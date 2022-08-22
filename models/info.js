const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  descreption: {
    type: String,
  },
});

infoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("info", infoSchema);
