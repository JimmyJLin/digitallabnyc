jQuery(document).ready(function() {
    
  $('.modal').click( function(e) {
    alert("worked");
    $('body').addClass('modal');    
  });
  
});

naBaseApp.directive("toggleModal", function() {
  return {
    link: function($scope, element, attr) {
      element.on("click", function() {
          $('body').toggleClass("modal");
      });
    }
  }
});