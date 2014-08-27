angular.module('ProfileCtrl', [])
  .controller('ProfileController', ['$scope', 'UserData', function($scope, userData) {
    userData.get().success(function(data, status) {
      console.log("GOING BIG");
      $scope.data = data;
      $scope.username = data.user.username;
      console.log($scope.username);
    });
  }]);