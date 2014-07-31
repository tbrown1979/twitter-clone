var app = angular.module("twitterApp", []);

//twitterApp.controller('', ["$scope", "$http",
function TwitterAppCtrl($scope, $http) {
  $scope.username;
  $scope.error;

  $scope.submitUsername =
    function(desiredUsername) {
      console.log(desiredUsername);
      $http.post('/setUsername', {"username" : desiredUsername})
        .success(
          function(data) {
            if (data.type === "Success") {
              $scope.username = data.username;
            } else {
              $scope.error = data.message;
            }
          });
    };
}
