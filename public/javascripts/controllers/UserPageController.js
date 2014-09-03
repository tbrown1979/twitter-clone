angular.module('UserPageCtrl', []).controller(
  'UserPageController',
  ['$scope',
   '$routeParams',
   'User',
   'Tweet',
   'userData',
   function($scope, $routeParams, User, Tweet, userData) {
     $scope.id       = $routeParams.param;
     $scope.user     = userData.data.user;
     $scope.username = $scope.user.username;
     $scope.photo    = $scope.user.photo;
     $scope.tweets   = [];
     $scope.tweet;
     $scope.error;

     $scope.createTweet = function(tweet) {
       var tweetJson = {"tweet": tweet};
       Tweet.create(tweetJson).success(function(data) {
         if (data.tweet) {
           $scope.tweets.unshift(data.tweet[0]);
           $scope.tweet = "";
         } else {
           $scope.error = data.error;
         }
       })
     };

     Tweet.getAll($scope.id).success(function(data, status) {
       $scope.tweets = data.tweets;
     });
   }]
);
