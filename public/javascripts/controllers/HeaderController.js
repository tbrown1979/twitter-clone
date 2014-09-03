angular.module('HeaderCtrl', []).controller(
  'HeaderController', ['$scope', 'User', function($scope, User) {
    $scope.isAuthenticated = User.getIsAuthenticated;
  }]
);
