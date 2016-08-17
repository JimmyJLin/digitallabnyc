(function() {
  'use strict';
  $(document).ready(function() {

  });
}());


naBaseApp.directive("toggleModal", function() {
  return {
    link: function($scope, element, attr) {
      element.on("click", function() {
          $('body').toggleClass("modal");
      });
    }
  }
});
