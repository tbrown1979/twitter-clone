app.run(['$rootScope', '$location', 'User', function ($rootScope, $location, User) {
  var userInitialized = false;
  $rootScope.$on("$locationChangeStart", function(event, next, current) {
    redirectIfNotAuthenticated(locationOnFailure);
  })

  function locationOnFailure() {
    $location.path("/login");
  }

  function redirectIfNotAuthenticated(onFailure) {
    if (userInitialized) {
      if (!User.getIsAuthenticated()) {
        $location.path("/login");
      }
    } else {
      User.checkAuth().success(function(data) {
        userInitialized = true;
        if (data.status === "success") {
          User.loggedIn();
        } else {
          onFailure();
        }
      })
    }
  }
}]);
