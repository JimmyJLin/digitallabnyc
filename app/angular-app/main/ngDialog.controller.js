angular.module('naBaseApp').controller('NgController', NgController)

  function NgController($scope, ngDialog){
    $scope.clickToOpen = function () {
      ngDialog.open({ template: 'popupTmpl.html', className: 'ngdialog-theme-default' });
    }
  }
