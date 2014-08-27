var mongoose = require('mongoose');
    Schema = mongoose.Schema;
//var User = require('./user.js');

var tweetSchema = mongoose.Schema({
  text: String,
  timestamp: Date,
  user: {type : Schema.ObjectId, ref : 'User'}
});

module.exports = mongoose.model('Tweet', tweetSchema);
