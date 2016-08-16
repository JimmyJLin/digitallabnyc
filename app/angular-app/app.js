var naBaseApp = angular.module("naBaseApp", [ "ngRoute" ])

naBaseApp.config(function ($httpProvider, $routeProvider) {
   $httpProvider.interceptors.push('AuthInterceptor')

    $routeProvider

    /* Landing Page */
    .when( "/",{
			redirectTo: "/index"
		})
    .when("/index", {
			controller: "PublicController",
			templateUrl: "/angular-app/main/index.html",
      access:{
        restricted:false
      }
		})


  /* Dealer */
  .when("/dealer/dealersignup",{
    controller: "DealerSignupController",
    templateUrl: "/angular-app/dealer/dealer_signup/dealerSignup.html",
    controllerAs: 'vm'

  })
  .when("/dealer/dealersignin",{
    controller: "DealerSigninController",
    templateUrl: "/angular-app/dealer/dealer_signin/dealerSignin.html",
    controllerAs: 'vm'
  })
  .when("/dealer/resetpassword",{
    controller: "ResetPasswordController",
    templateUrl: "/angular-app/partials/reset_password/reset_password.html",
    controllerAs: 'vm'
  })

  /* Vehicle */
  .when('/vehicle/addvehicle', {
    controller: "VehiclesAddController",
    templateUrl: "/angular-app/vehicle/vehicle_add/addVehicle.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/addvehiclecondition', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/condition/addCondition.html",
    controllerAs: 'vm'
  })

  /* Inventory */
  .when('/inventory/vehicles', {
    controller: "VehiclesInventoryController",
    templateUrl: "/angular-app/vehicle/vehicle_inventory/vehicles_inventory.html",
    controllerAs: 'vm'
  })

	// Redirect to 404
  .otherwise({
		redirectTo:
		"/404_page"
	});

});


naBaseApp.run(function($rootScope, $location, $window, AuthFactory){
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if(  nextRoute.access !== undefined && nextRoute.access.restricted && !window.sessionStorage.token && !AuthFactory.isSignedIn ) {
      event.preventDefault();
      $location.path('#/public/index')
    }
  });
})
