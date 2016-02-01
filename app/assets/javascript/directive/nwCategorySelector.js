angular.module('NoteWrangler').directive('nwCategorySelector', function(Category){
  return {
    restrict: 'E',
    replace: true,
    require: '?ngModel',
    templateUrl: '/assets/templates/directives/nwCategorySelector.html',
    link: function(scope, element, attrs, ngModelCtrl){
      var activeCategory = {};
      scope.categories = Category.query();
      scope.isActive = function(category){
        console.log(activeCategory)
        return activeCategory && activeCategory.id === category.id
      }

      scope.toggleCategory = function(category){
        if(category == activeCategory){
          activeCategory = {};
        }else{
          activeCategory = category;
        }
        ngModelCtrl.$setViewValue(activeCategory)
      }

      ngModelCtrl.$render = function(){
        activeCategory = ngModelCtrl.$viewValue;
      }
    }
  }
})
