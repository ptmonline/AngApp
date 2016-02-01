angular.module('NoteWrangler').controller('NotesCreateController', function(Note, Category, $scope, $location){
  $scope.note = new Note();
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  console.log($scope.categories)
  $scope.saveNote = function(note){
    $scope.isSubmitting = true
    note.$save().then(function(){
      $location.path('/notes/');
    }).finally(function(){
      $scope.isSubmitting = false;
    })
  }
})
