const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const inventorySchema = new mongoose.Schema(
  {
    productId: {
      type: ObjectId,
    },
    quantity: {
      type: Number,
    },
  },
  {
    collection: "inventories",
  }
);

inventorySchema.plugin(timestamps); // automatically adds createdAt and updatedAt timestamps
module.exports = mongoose.model("Inventory", inventorySchema);
