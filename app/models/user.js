var mongoose = require('mongoose');
var Tweet = require('./tweet.js');

var userSchema = mongoose.Schema({
  username    : String,
  id          : String,
  token       : String,
  displayName : String,
  statuses    : {
    type: mongoose.Schema.ObjectId,
    ref : 'Tweet',
    default: []
  }
});

// var userSchema = mongoose.Schema({

//   local            : {
//     email        : String,
//     password     : String,
//   },
//   facebook         : {
//     id           : String,
//     token        : String,
//     email        : String,
//     name         : String
//   },
//   twitter          : {
//     id           : String,
//     token        : String,
//     displayName  : String,
//     username     : String
//   },
//   google           : {
//     id           : String,
//     token        : String,
//     email        : String,
//     name         : String
//   }

// });



// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
