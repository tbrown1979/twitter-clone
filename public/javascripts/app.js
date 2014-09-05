var app = angular.module('twitterApp',
                         ['ngRoute',
                          'httpFactory',
                          'appRoutes',
                          'TweetService',
                          'common-directives',
                          'LoginCtrl',
                          'UserPageCtrl',
                          'MainPageCtrl',
                          'HeaderCtrl',
                          'UserService'
                         ]);
