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
      //User doesn't exist, we just go to the 404
      // else {
      //   res.json({user: user});
      //}
    });
  } catch(err) {
    //better solution needed here
    res.json({redirect : "/404", message : "This is not a valid user_id"});
  }
};


exports.getUsersTweets = function(req, res) {
  var id = req.params.id;
    Tweet.find({"user": new ObjectId(id)}).sort('-date').limit(20).exec(
      function(err, tweets) {
        if (err) {
          consol
          jsonError(err);
        }
        var tweetInfo = formatTweets(tweets, req.user)
        return res.json({status: "success", "tweets": tweetInfo});
      }
    );

}

function formatTweets(listOfTweets, user) {
  console.log(listOfTweets);
  return _.map(listOfTweets, function(tweet){
    return {
      text: tweet.text,
      user: user.username,
      url: user.id
    }
  });
}
