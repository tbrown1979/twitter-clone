app.run(['$rootScope', '$location', 'User', function ($rootScope, $location, User) {
  var userInitialized = false;
  $rootScope.$on("$locationChangeStart", function(event, next, current) {
    console.log("authentication status: " + User.getIsAuthenticated());
    redirectIfNotAuthenticated(locationOnFailure);
  })

  function locationOnFailure() {
    $location.path("/login");
  }

  function redirectIfNotAuthenticated(onFailure) {
    if (userInitialized) {
      if (!User.getIsAuthenticated()) {
        console.log("going to login page");
        $location.path("/login");
      }
    } else {
      User.checkAuth().success(function(data) {
        console.log("CHECK AUTH: " + JSON.stringify(data));
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
