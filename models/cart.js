const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
    },
    cartId: {
      type: ObjectId,
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

cartSchema.plugin(timestamps); // automatically adds createdAt and updatedAt timestamps
module.exports = mongoose.model("Cart", cartSchema);
