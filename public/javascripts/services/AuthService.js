angular.module('AuthService', []).factory('Auth', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('/auth/facebook');
    }
  }
}]);
