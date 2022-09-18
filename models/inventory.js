const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const mongoose_delete = require("mongoose-delete");

const inventorySchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    quantity: {
      type: Number,
    },
  },
  {
    collection: "inventories",
  }
);
inventorySchema.plugin(mongoose_delete);
inventorySchema.plugin(timestamps); // automatically adds createdAt and updatedAt timestamps
module.exports = mongoose.model("Inventory", inventorySchema);
