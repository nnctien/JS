const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
      required: false,
    },
    quantity: {
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
    availability: {
      type: String,
      trim: true,
      default: 0,
    },
    gender: {
      type: String,
    },
    category: {
      type: String,
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("product", productSchema);
