angular.module('HeaderCtrl', []).controller(
  'HeaderController', ['$scope', 'User', function($scope, $http, User) {
    $scope.isAuthenticated = User.isAuthenticated();
  }]
);
