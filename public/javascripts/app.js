var app = angular.module('twitterApp',
                         ['ngRoute',
                          'httpFactory',
                          'appRoutes',
                          'TweetService',
                          'common-directives',
                          'LoginCtrl',
                          'UserPageCtrl',
                          'HeaderCtrl',
                          'UserService'
                         ]);
