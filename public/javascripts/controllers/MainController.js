//twitterApp.controller('', ["$scope", "$http",
angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Auth', function($scope, auth) {
  $scope.username;
  $scope.error;
  $scope.tagline = "HHAHAHAHAHAHAHAHAHAH";
  $scope.auth = auth;
}]);
