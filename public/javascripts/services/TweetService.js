angular.module('TweetService', []).factory('Tweet', ['$http', function($http) {

  return {
    create : function(text) {
      var data = {tweet: text}
      return $http.post('/api/tweet', data);
    },

    getById : function(id) {
      console.log(id);
      return $http.get('/api/tweets/all/' + id);
    },

    getPage : function(pageNum) {
      return $http.get('/api/tweets/page/' + pageNum);//needs to be implemented
    },

    getLatest : function(offset, limit) {}
  }
}]);
