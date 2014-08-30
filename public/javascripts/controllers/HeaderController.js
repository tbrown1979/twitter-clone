angular.module('HeaderCtrl', []).controller(
  'HeaderController', ['$scope', 'Auth', function($scope, Auth) {
    console.log(Auth);
    console.log(Auth.isAuthenticated);
    $scope.Auth = Auth;
    $scope.logout = Auth.logout;
  }]
);
