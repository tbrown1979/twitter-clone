angular.module('MainPageCtrl', []).controller(
  'MainPageController',
  ['$scope',
   '$routeParams',
   'User',
   'Tweet',
   function($scope, $routeParams, User, Tweet) {
     console.log("MainPage");
     Tweet.getPage(1).success(function(data) {
       $scope.tweets = data.tweets;
     })
   }
  ]
);
