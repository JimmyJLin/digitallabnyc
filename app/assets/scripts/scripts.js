(function() {
  'use strict';
  
  $(document).ready(function() {

  });
}());

angular.module('naBaseApp')
.directive('activeLink', ['$location', function ($location) {
return {
    restrict: 'A', //use as attribute 
    replace: false,
    link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
            var hrefs = ['/#' + $location.path(),
                         '#' + $location.path(), //html5: false
                         $location.path()]; //html5: true
            angular.forEach(elem.find('a'), function (a) {
                a = angular.element(a);
                if (-1 !== hrefs.indexOf(a.attr('href'))) {
                    a.parent().addClass('active');
                } else {
                    a.parent().removeClass('active');   
                };
            });     
        });
    }
}
}]);


naBaseApp.directive("toggleModal", function() {
  return {
    link: function($scope, element, attr) {
      element.on("click", function() {
          $('body').toggleClass("modal");
      });
    }
  }
});

naBaseApp.directive("activeNav", function() {
  return {
    link: function($scope, element, attr) {
      element.on("click", function() {
      
//        $('header.main nav a').removeClass("active");
//        $(this).addClass("active");
      });
      
    }
  }
});

naBaseApp.directive("signUp", function() {
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
