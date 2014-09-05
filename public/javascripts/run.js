app.run(['$rootScope', '$location', 'User', function ($rootScope, $location, User) {
  $rootScope.$on("$locationChangeStart", function(event, next, current) {
    if (!User.getIsAuthenticated()) {
      $location.path("/login");
    }
  });
  User.checkAuth().success(function(data) {
    if (data.status === "success") {
      User.loggedIn();
    } else {
      console.log("failed");
    }
  })
}]);
