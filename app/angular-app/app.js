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
  .when('/vehicles', {
    controller: "VehiclesAllController",
    templateUrl: "/angular-app/vehicle/vehicle_all/vehicles_all.html",
    controllerAs: 'vm'
  })
  .when('/vehicles/:vehicleID', {
    controller: "VehicleDetailsController",
    templateUrl: "/angular-app/vehicle/vehicle_details/vehicle_details.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/addvehicle', {
    controller: "VehiclesAddController",
    templateUrl: "/angular-app/vehicle/vehicle_add/addVehicle.html",
    controllerAs: 'vm'
  })

  /* Vehicle Condition Report */
  .when('/vehicle/addvehicleconditions_step1', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/vehicle_condition/addconditionsteps/addcondition_step1.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/addcondition_step2', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/vehicle_condition/addconditionsteps/addcondition_step2.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/addcondition_step3', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/vehicle_condition/addconditionsteps/addcondition_step3.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/addcondition_step4', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/vehicle_condition/addconditionsteps/addcondition_step4.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/addcondition_step5', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/vehicle_condition/addconditionsteps/addcondition_step5.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/addcondition_step6', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/vehicle_condition/addconditionsteps/addcondition_step6.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/addcondition_step7', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/vehicle_condition/addconditionsteps/addcondition_step7.html",
    controllerAs: 'vm'
  })

  /* Add Vehicle by Vin */
  .when('/vehicle/addvehiclebyvin', {
    controller: "VehicleAddbyVinController",
    templateUrl: "/angular-app/vehicle/vehicle_add_by_vin/vehicle_add_by_vin.html",
    controllerAs: 'vm'
  })
  // .when('/vehicle/addvehiclebyvin_step2', {
  //   controller: "VehiclesAddController",
  //   templateUrl: "/angular-app/vehicle/vehicle_add_by_vin/vehicle_add_by_vin_step2.html",
  //   controllerAs: 'vm'
  // })
  // .when('/vehicle/addvehiclebyvin_step3', {
  //   controller: "VehiclesAddController",
  //   templateUrl: "/angular-app/vehicle/vehicle_add_by_vin/vehicle_add_by_vin_step3.html",
  //   controllerAs: 'vm'
  // })

  /* Marketplace */
  .when('/marketplace', {
    controller: "PublicController",
    templateUrl: "/angular-app/marketplace/marketplace.html",
    activetab: 'marketplace'
  })

  /* Inventory */
  .when('/inventory/vehicles', {
    controller: "VehiclesInventoryController",
    templateUrl: "/angular-app/vehicle/vehicle_inventory/vehicles_inventory.html",
    controllerAs: 'vm',
    activetab: 'inventory'
  })

  /* Watchlist */
  .when('/watchlist', {
    controller: "WatchlistController",
    templateUrl: "/angular-app/watchlist/watchlist.html",
    controllerAs: 'vm',
    activetab: 'watchlist'
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
