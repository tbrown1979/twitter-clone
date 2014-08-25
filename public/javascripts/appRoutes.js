angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

  //home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })


    // .when('/auth',{
    //   redirectTo: function () {
    //     $location.path("/auth/facebook");
    //     //return "/auth/facebook";
    //   }
    // })

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
