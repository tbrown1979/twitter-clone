angular.module('ProfileCtrl', [])
  .controller('ProfileController', ['$scope', 'userData', function($scope, userData) {
    $scope.username = userData.data.user.username;
    console.log($scope.username);
  }]);
