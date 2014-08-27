var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
  text: String,
  timestamp: Date
});

module.exports = mongoose.model('Tweet', tweetSchema);
