var User = require('../models/user.js');
var Tweet = require('../models/tweet.js');

exports.home = function(req, res) {
  res.render('index', { title: 'Express' });
};

exports.testController = function(req, res) {
  res.render('index', { 'user': req.user.username });
}

exports.storeTweet = function(req, res) {
  console.log(req.body);
  var newTweet = new Tweet();
  newTweet.text = req.body.tweet;
  newTweet.user = req.user;
  newTweet.save(function(err) {
    if (err) {
      res.json({
        status: "error",
        error: err.errors
      });
    }
    return res.json({status: "success"});
  });
};

exports.retrieveUserData = function(req, res) {
  console.log(req.user);
  res.json({user : req.user});
};
