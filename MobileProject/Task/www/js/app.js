
angular.module('task', ['ionic'])

.controller('Controller', function($scope, $ionicModal) {
    $scope.tasks = [];

  // creating and loading the model
  $ionicModal.fromTemplateUrl('New', function(modal) {
    $scope.MyModal = modal;
  }, {
    scope: $scope,
    animation: '' //animations the slide up of the form
  });

  // Calls when the form is submitted
  $scope.createTheTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.MyModal.hide();
    task.title = "";
  };

  // opens and new modal task when you click on the mark icon
  $scope.thisTask = function() {
    $scope.MyModal.show();
    
  };
  // Closes the new modal task the cancel funtion
  $scope.closeTheTask = function() {
    $scope.MyModal.hide();
  };
});