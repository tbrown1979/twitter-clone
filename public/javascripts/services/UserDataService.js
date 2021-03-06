angular.module('UserService', []).factory('User', ['$http', function($http) {

  var isAuthenticated = false;

  function getIsAuthenticated() {
    return isAuthenticated;
  }

  return {
    get : function() {
      return $http.get('/api/userData');
    },
    getSpecificUserData : function(id) {
      return $http.get('/api/userData/' + id);
    },
    checkAuth: function() {
      return $http.get('/auth/check');
    },
    getIsAuthenticated : getIsAuthenticated,
    loggedIn : function() {
      isAuthenticated = true;
    }
  }
}]);
