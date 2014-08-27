angular.module('ProfileCtrl', [])
  .controller('ProfileController', ['$scope', 'userData', 'Tweet', function($scope, userData, Tweet) {
    $scope.username = userData.data.user.username;
    $scope.tweet = "please enter something...";
    $scope.createTweet = function(tweet) {
      var tweetJson = {"tweet": tweet};
      Tweet.create(tweetJson);
    }
    console.log($scope.username);
  }]);
