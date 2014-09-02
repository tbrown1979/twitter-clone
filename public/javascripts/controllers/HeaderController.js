angular.module('HeaderCtrl', []).controller(
  'HeaderController', ['$scope', 'Auth', function($scope, Auth) {
    //console.log(Auth);
    console.log(Auth.isAuthenticated);
    $scope.isAuthenticated = Auth.isAuthenticated;
    $scope.logout = Auth.logout;
  }]
);
