const mongoose  = require('mongoose');
const timestamps    = require('mongoose-timestamp');

const cateorySchema = new mongoose.Schema({
  category: {
    type: String,
    trim: true,
    required: true,
  },
  active: {
        type: Boolean,
        default: true,
    }
});

cateorySchema.plugin(timestamps); // automatically adds createdAt and updatedAt timestamps
module.exports = mongoose.model('Category',cateorySchema);