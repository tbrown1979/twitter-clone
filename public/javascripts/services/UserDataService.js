angular.module('UserService', []).factory('User', ['$http', function($http) {

  var isAuthenticated = false;

  function getIsAuthenticated() {
    return isAuthenticated;
  }

  return {
    get : function() {
      return $http.get('/api/userData');
    },
    getIsAuthenticated : getIsAuthenticated,
    loggedIn : function() {
      isAuthenticated = true;
    }
  }
}]);
