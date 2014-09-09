angular.module('UserDataCtrl', []).controller(
  'UserDataController',
  ['$scope',
   'User',
   function($scope, User) {
     console.log("UserController");
     $scope.isAuthenticated = User.getIsAuthenticated;
     User.get().success(function(data) {
       console.log(data);
       $scope.userData = data;
       $scope.userPageUrl = "/user/" + data.user._id;
       $scope.username = data.user.username;
       $scope.photo = data.user.photo;
     })
   }
  ]
);
