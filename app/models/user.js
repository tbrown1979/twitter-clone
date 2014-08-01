var mongoose = require('mongoose');
var Status = require('./status.js');

var userSchema = mongoose.Schema({
  username : String,
  statuses : {
    type: mongoose.Schema.ObjectId,
    ref: 'Status',
    default: []
  }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
