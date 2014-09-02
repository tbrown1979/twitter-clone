angular.module('AuthService', []).factory('Auth', ['$http', function($http) {

  var isAuthenticated = false;

  return {
    get : function() {
      return $http.get('/auth/facebook');
    },
    isAuthenticated : function() { return isAuthenticated; }
  }
}]);
