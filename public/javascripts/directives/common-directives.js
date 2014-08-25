angular.module('common-directives', [])//should use $window service?
  .directive('redir', ['$http', function($http) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function(e) {
          e.preventDefault();
          window.location = attrs.href;
        });
      }
    }
  }])
