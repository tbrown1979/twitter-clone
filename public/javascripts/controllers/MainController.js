//twitterApp.controller('', ["$scope", "$http",
angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Auth', function($scope, auth) {
  $scope.username;
  $scope.error;
  $scope.tagline = "HHAHAHAHAHAHAHAHAHAH";
  $scope.auth = auth;
  // $scope.auth = function() {
  //   console.log("made it");
  //   auth.get;
  // };
  console.log(auth);
  //console.log(auth);
}]);
