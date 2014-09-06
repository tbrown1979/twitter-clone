angular.module('TweetService', []).factory('Tweet', ['$http', function($http) {

  return {
    create : function(data) {
      return $http.post('/api/tweet', data);
    },

    getById : function(id) {
      console.log(id);
      return $http.get('/api/tweets/all/' + id);
    },

    getLatest : function(offset, limit) {}
  }
}]);
