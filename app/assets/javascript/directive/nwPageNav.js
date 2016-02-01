angular.module('NoteWrangler').directive('nwPageNav', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'assets/templates/directives/nwPageNav.html',
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp('/' + name + '($|/)').test($location.path());
      }
    }
  }
})
