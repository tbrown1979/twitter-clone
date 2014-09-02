angular.module('TweetService', []).factory('Tweet', ['$http', function($http) {

  return {
    create : function(data) {
      return $http.post('/api/tweet', data);
    },

    getAll : function(id) {
      console.log(id);
      return $http.get('/api/tweets/all/' + id);
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
