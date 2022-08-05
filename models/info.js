const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const infoSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
    trim: true,
  },
  adress:{
    type: String,
  },
  phoneNumber:{
    type: String,
  }
});

infoSchema.plugin( mongoosePaginate );
module.exports = mongoose.model('info', infoSchema)