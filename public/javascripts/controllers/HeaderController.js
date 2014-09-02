angular.module('HeaderCtrl', []).controller(
  'HeaderController', ['$scope', 'Auth', function($scope, Auth) {
    //console.log(Auth);//not authenticated. Need to decide where this gets switched to true.
    console.log(Auth.isAuthenticated());
    $scope.isAuthenticated = Auth.isAuthenticated();
    $scope.logout = Auth.logout;
  }]
);
