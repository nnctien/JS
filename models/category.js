const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      trim: true,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "categories",
  }
);

categorySchema.plugin(timestamps); // automatically adds createdAt and updatedAt timestamps
module.exports = mongoose.model("Category", categorySchema);
