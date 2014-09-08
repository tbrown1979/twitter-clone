angular.module('MainPageCtrl', []).controller(
  'MainPageController',
  ['$scope',
   '$routeParams',
   'User',
   'Tweet',
   function($scope, $routeParams, User, Tweet) {
     console.log("MainPage");
   }
  ]
);
