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

naBaseApp.directive("changeModal", function() {
  return {
    link: function($scope, element, attr) {
      element.on("click", function() {
          $('.signin').css('display','none');
          $('.signup').css('display','block')
      });
    }
  }
});
naBaseApp.directive("signIn", function() {
  return {
    link: function($scope, element, attr) {
      element.on("click", function() {
          $('.signup').css('display','none');
          $('.signin').css('display','block')
      });
    }
  }
});
