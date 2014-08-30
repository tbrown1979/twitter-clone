var User = require('../models/user.js');
var Tweet = require('../models/tweet.js');
var _ = require('underscore');

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
      res.json(jsonError(err));
    }
    return res.json({
      status: "success",
      tweet: formatTweets([newTweet], req.user)
    });
  });
};

exports.retrieveUserData = function(req, res) {
  res.json({user : req.user});
};

exports.getUsersTweets = function(req, res) {
  Tweet.find({user: req.user}).sort('-date').limit(20).exec(
    function(err, tweets) {
      if (err) {
        jsonError(err);
      }
      var tweetInfo = formatTweets(tweets, req.user)
      return res.json({status: "success", "tweets": tweetInfo});
    }
  );
}

function formatTweets(listOfTweets, user) {
  console.log(listOfTweets);
  return _.map(listOfTweets, function(tweet){return {text: tweet.text, user: user.username}});
}
