(function() {
  angular.module('httpFactory', [])
    .factory('myHttpResponseInterceptor',['$q','$location',function($q,$location, growl){
      return {
        response: function(response) {
          if (typeof response.data === 'object') {
            if (response.data.redirect) {
              console.log("redirecting...");
              $location.path(response.data.redirect);
              return $q.reject(response);
            } //else if (response.data.error) {
              //growl.addErrorMessage(response.data.error);
            //}
          }
          return response || $q.when(response);
        }
      };
    }])
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push('myHttpResponseInterceptor');
    }]);
})();
