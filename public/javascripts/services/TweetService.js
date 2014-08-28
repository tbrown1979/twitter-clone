angular.module('TweetService', []).factory('Tweet', ['$http', function($http) {

  return {
    create : function(data) {
      return $http.post('/api/tweet', data);
    },

    getAll : function() {
      return $http.get('/api/tweets/all');
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
