const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  item: { type: String, required: true }
});

module.exports = mongoose.model('Thing', thingSchema);