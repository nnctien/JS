const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

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
    shipping: {
      type: Object,
    },
    payment: {
      type: Object,
    },
    status: {
      type: String,
      default: "active",
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
