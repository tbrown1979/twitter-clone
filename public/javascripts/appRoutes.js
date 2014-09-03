angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  //home page
    .when('/login', {
      templateUrl: '/views/login.html',
      controller: 'LoginController'
    })

    .when('/user/:param', {
      templateUrl: '/views/profile.html',
      controller: 'UserPageController',
      resolve: {
        userData: function(User, $route) {
          return User.getSpecificUserData($route.current.params.param);
        }
      }
    })

  $locationProvider.html5Mode(true);
}]);
