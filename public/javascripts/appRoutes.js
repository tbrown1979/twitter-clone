angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  //home page
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })

    .when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileController',
      resolve: {
        userData: function(User) {
          return User.get();
        }
      }
    })

  // nerds page that will use the NerdController
  //   .when('/nerds', {
  //     templateUrl: 'views/nerd.html',
  //     controller: 'NerdController'
  //   })

  // //
  //   .when('/geeks', {
  //     templateUrl: 'views/geek.html',
  //     controller: 'GeekController'
  //   });

  $locationProvider.html5Mode(true);

}]);
