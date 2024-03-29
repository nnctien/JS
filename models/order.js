require("dotenv").config();
const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const GHN = require('giaohangnhanh');
const token = process.env.GHN;
const ghn = new GHN(token);
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
    },
    orderId: {
      type: ObjectId,
    },
    cartId: {
      type: ObjectId,
    },
    shippingFee: {
      type: Object,
    },
    payment: {
      type: Object,
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "Transiting",
        "Done",
        "Cancelled",
        "notAccepted",
        "Return",
      ],
      default: "Pending",
    },
    products: {
      type: Array,
    },
  },
  {
    collection: "carts",
  }
);

orderSchema.plugin(timestamps); // automatically adds createdAt and updatedAt timestamps
module.exports = mongoose.model("Order", orderSchema);
