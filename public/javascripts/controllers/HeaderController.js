angular.module('HeaderCtrl', []).controller(
  'HeaderController', ['$scope', 'User', 'Tweet', function($scope, User, Tweet) {
    $scope.isAuthenticated = User.getIsAuthenticated;
    $scope.createTweet = Tweet.create;
  }]
);
