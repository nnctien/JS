const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const productSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: mongoose.Decimal128,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imageLink: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  availability: {
    type: String,
    trim: true,
  },
  gender:{
    type: String,
  },
  category: {
    type: String,
    trim: true,
  },
  views:{
    type: Number,
    default : 0,
  }
});

productSchema.plugin( mongoosePaginate );
module.exports = mongoose.model('product', productSchema);
