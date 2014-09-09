angular.module('HeaderCtrl', []).controller(
  'HeaderController', ['$scope', 'Tweet', function($scope, Tweet) {
    $scope.createTweet = Tweet.create;
  }]
);
