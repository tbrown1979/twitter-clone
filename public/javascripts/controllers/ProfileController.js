angular.module('ProfileCtrl', []).controller(
  'ProfileController', ['$scope', '$http', 'userData', 'Tweet', function($scope, $http, userData, Tweet) {
    console.log(userData);
    $scope.username = userData.data.user.username;
    $scope.tweet = "please enter something...";
    $scope.createTweet = function(tweet) {
      var tweetJson = {"tweet": tweet};
      Tweet.create(tweetJson);
    }
    console.log($scope.username);

    $http.get('/api/tweets/all').success(function(data, status) {
      console.log("Data: " + data);
    });
  }]
);
