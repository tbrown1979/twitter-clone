angular.module('ProfileCtrl', []).controller(
  'ProfileController',
  ['$scope', '$http', 'User', 'Tweet', 'Auth', 'userData', function($scope, $http, User, Tweet, Auth, userData) {
    Auth.isAuthenticated = true;

    $scope.user     = userData.data.user;
    $scope.username = $scope.user.username;
    $scope.photo    = $scope.user.photo;
    $scope.tweet    = "please enter something...";
    $scope.tweets   = [];
    $scope.error;

    $scope.createTweet = function(tweet) {
      var tweetJson = {"tweet": tweet};
      Tweet.create(tweetJson).success(function(data) {
        console.log("THE DATA :" + JSON.stringify(data));
        if (data.tweet) {
          $scope.tweets.unshift(data.tweet[0]);
        } else {
          $scope.error = data.error;
        }
      })
    };
    Tweet.getAll().success(function(data, status) {
      $scope.tweets = data.tweets;
    });
  }]
);
