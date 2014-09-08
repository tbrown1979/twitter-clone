angular.module('UserDataCtrl', []).controller(
  'UserDataController',
  ['$scope',
   'User',
   function($scope, User) {
     console.log("UserController");
     User.get().success(function(data) {
       console.log(data);
       $scope.userData = data;
       $scope.userPage = "/user/" + data.user._id;
       console.log($scope.userData);
     })
   }
  ]
);
