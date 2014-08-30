angular.module('ProfileCtrl', []).controller(
  'ProfileController',
  ['$scope', '$http', 'User', 'Tweet', 'Auth', 'userData', function($scope, $http, User, Tweet, Auth, userData) {
    console.log(userData);
    Auth.isAuthenticated = true;
    console.log("Profile auth: " + Auth.isAuthenticated);
    $scope.user = userData.data.user;
    $scope.username = $scope.user.username;
    $scope.photo = $scope.user.photo;
    $scope.tweet = "please enter something...";
    $scope.createTweet = function(tweet) {
      var tweetJson = {"tweet": tweet};
      Tweet.create(tweetJson);
    };
    Tweet.getAll().success(function(data, status) {
      $scope.tweets = data.tweets;
    });
  }]
);
