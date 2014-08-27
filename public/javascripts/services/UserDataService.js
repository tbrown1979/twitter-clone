angular.module('UserDataService', []).factory('UserData', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('/api/userData');
    }

    // call to POST and create a new nerd
    // create : function(nerdData) {
    //   return $http.post('/api/nerds', nerdData);
    // },

    // // call to DELETE a nerd
    // delete : function(id) {
    //   return $http.delete('/api/nerds/' + id);
    // }
  }
}]);