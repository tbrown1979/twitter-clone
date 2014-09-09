var mongoose = require('mongoose');
    User     = require('./user.js');
    Schema   = mongoose.Schema;

//use Scheme.pre to update the user's tweets count

var TweetSchema = mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now },
  user: User
});

TweetSchema.statics = {
  list: function(options, cb) {
    var offset = 1

    this.find({})
      .sort('-date')
      .limit(options.perPage)
      .skip(options.perPage * (options.page - offset))
      .exec(cb);
  }
}

module.exports = mongoose.model('Tweet', TweetSchema);
