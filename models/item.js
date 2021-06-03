const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: { type: String, required: true },
  numberInStock: { type: Number, required: true },
});

ItemSchema.virtual('url').get(function getUrl() {
  return `/inventory/items/${this._id}`;
});

ItemSchema.virtual('formattedPrice').get(function getFormattedPrice() {
  return `$${this.price}`;
});

module.exports = mongoose.model('Item', ItemSchema);
