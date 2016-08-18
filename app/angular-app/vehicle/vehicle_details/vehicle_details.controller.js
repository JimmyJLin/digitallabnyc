angular.module('naBaseApp').controller('VehicleDetailsController', VehicleDetailsController);


function VehicleDetailsController($routeParams, $scope, vehicleDetailsProvider){
  var vm = this;
  var vehicleID = $routeParams.vehicleID;

  // $scope.vehicle = vehicleDetailsProvider.vehicleDisplay(vehicleID, function(err, vehicle){
  //     $scope.finished_loading = true;
  //     if (err) {
  //         $scope.page_load_error = err.message;
  //     } else {
  //           console.log("DEBUG => data --> " + vehicles);
  //          $scope.vehicle = vehicle;
  //     }
  // })

$scope.vehicle = {
  "ID":1,
  "ItemGuid":"617a69c3-bd34-445c-a762-1bbcf228f7bb",
  "ItemName":"",
  "DateCreated":"2016-08-08T21:20:34.817",
  "DateLastModified":"2016-08-09T07:55:04.11",
  "IsActive":true,
  "IsDeleted":false,
  "Notes":"",
  "VIN":"1GNEK13Z34J221437",
  "Year":"2013",
  "Make":"ford",
  "Model":"fusion",
  "Type":"25000",
  "Description":"Black, with faded sports stripes. Here are edited notes.",
  "Price":"25000",
  "OwnerGuid":"617a69c3-bd34-445c-a762-1bbcf228f7bb"
  }
}
