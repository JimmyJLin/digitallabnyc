angular.module('naBaseApp').controller('VehicleDetailsController', VehicleDetailsController);


function VehicleDetailsController($routeParams, vehicleDetailsProvider){
  var vm = this;
  var vehicleID = $routeParams.vehicleID;

  console.log('this is the vehicle guid', vehicleID)
  // $scope.vehicle = vehicleDetailsProvider.vehicleDisplay(vehicleID, function(err, vehicle){
  //     $scope.finished_loading = true;
  //     if (err) {
  //         $scope.page_load_error = err.message;
  //     } else {
  //           console.log("DEBUG => data --> " + vehicles);
  //          $scope.vehicle = vehicle;
  //     }
  // })

}
