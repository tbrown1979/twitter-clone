var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var tweetSchema = mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now },
  user: { type : Schema.ObjectId, ref : 'User'}
});

module.exports = mongoose.model('Tweet', tweetSchema);
