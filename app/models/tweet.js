var mongoose = require('mongoose');
    User     = require('./user.js');
    Schema   = mongoose.Schema;

var tweetSchema = mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now },
  user: User
});

module.exports = mongoose.model('Tweet', tweetSchema);
