var User = require('../models/user.js');
var Tweet = require('../models/tweet.js');
var ObjectId = require('mongoose').Types.ObjectId;

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

exports.authCheck = function(req, res) {
  res.json({status: "success"});
}

exports.testController = function(req, res) {
  res.render('index', { 'user': req.user.username });
}

exports.storeTweet = function(req, res) {
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

exports.retrieveSpecificUserData = function(req, res) {
  var id = req.params.id;
  try {
    var userObjectId = new ObjectId(id);
    User.findOne({_id: userObjectId}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        res.json({user: user});
      }
    });
  } catch(err) {
    //better solution needed here
    res.json({redirect : "/404", message : "This is not a valid user_id"});
  }
};


exports.getUsersTweets = function(req, res) {
  var id = req.params.id;
  Tweet.find({'user._id': new ObjectId(id)}).sort('-date').limit(20).exec(
    function(err, tweets) {
      if (err) {
        jsonError(err);
      }
      var tweetInfo = formatTweets(tweets);
      return res.json({status: "success", "tweets": tweetInfo});
    }
  );
}

exports.getTweetPage = function(req, res) {
  var pageNum = req.params.pageNum;
  console.log("PAGE NUMBER: " + pageNum);
  var options = {perPage: 20, page: pageNum};
  Tweet.list(options, function(err, tweets) {
    if (err) {
      jsonError(err);
    }
    var tweetInfo = formatTweets(tweets);
    return res.json({status: "success", "tweets": tweetInfo});
  });
}

function formatTweets(listOfTweets) {
  return _.map(listOfTweets, function(tweet){
    return {
      text: tweet.text,
      user: tweet.user.username,
      url: tweet.user.id
    }
  });
}
