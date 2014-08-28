var User = require('../models/user.js');
var Tweet = require('../models/tweet.js');

function jsonError(err) {
  var json = {
    status: "error",
    error: err.errors
  };
  return json;
}

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
      jsonError(err);
    }
    return res.json({status: "success"});
  });
};

exports.retrieveUserData = function(req, res) {
  res.json({user : req.user});
};

exports.getUsersTweets = function(req, res) {
  Tweet.find({user: req.user}, function(err, docs) {
    if (err) {
      jsonError(err);
    }
    return res.json({status: "success", tweets: docs});
  })
}
