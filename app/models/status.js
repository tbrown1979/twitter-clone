var mongoose = require('mongoose');

var statusSchema = mongoose.Schema({
  text: String,
  timestamp: Date
});

module.exports = mongoose.model('Status', statusSchema);
