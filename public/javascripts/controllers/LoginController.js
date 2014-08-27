//twitterApp.controller('', ["$scope", "$http",
angular.module('LoginCtrl', []).controller('LoginController', ['$scope', 'Auth', function($scope, auth) {
  $scope.username;
  $scope.error;
  $scope.tagline = "HHAHAHAHAHAHAHAHAHAH";
  $scope.auth = auth;
}]);
