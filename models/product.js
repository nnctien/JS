const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
var mongoose_delete = require('mongoose-delete');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      trim: true,
      required: false,
    },
    sold: {
      type: Number,
      required: false,
      trim: true,
      default: 0,
    },
    price: {
      type: mongoose.Decimal128,
      trim: true,
      required: false,
    },
    imageLink: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
    },
    category: {
      type: String,
      trim: true,
      ref: "categories",
    },
    views: {
      type: Number,
      default: 0,
    },
    specs: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
productSchema.plugin(mongoose_delete);
productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("product", productSchema);
