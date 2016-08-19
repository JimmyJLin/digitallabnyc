angular.module('naBaseApp').controller('VehicleAddbyVinController', VehicleAddbyVinController);

function VehicleAddbyVinController($scope, addbyVinProvider){
  var vm = this;
  vm.finalvehicle = {};
  
// 1GNEK13Z34J221437
  vm.addCond = function(){
      var vin = vm.vin;
      addbyVinProvider.getvehiclebyVin( vin, function(err, data){
        $scope.finished_loading = true;
        if (err) {
            $scope.page_load_error = err.message;
        } else {
            // console.log('DEBUG controller ' + JSON.stringify(data) );
            $scope.vehicle = data;
            vm.finalvehicle.vin = $scope.vehicle.VIN;
            vm.finalvehicle.VehicleMake = $scope.vehicle.VehicleMake;
            vm.finalvehicle.year = JSON.parse($scope.vehicle.DataBasic).year;
            vm.finalvehicle.model = JSON.parse($scope.vehicle.DataBasic).model.name;
            vm.finalvehicle.trim = JSON.parse($scope.vehicle.DataBasic).trim.name;
            vm.finalvehicle.bodyStyle = JSON.parse($scope.vehicle.DataBasic).vehicleStyle;
            vm.finalvehicle.vehicleType =JSON.parse($scope.vehicle.DataBasic).DataDetail
            vm.finalvehicle.itemNo = $scope.vehicle.ItemGuid
            vm.finalvehicle.addedsDate = $scope.vehicle.DateCreated
            console.log( vm.finalvehicle.vin , $scope.vehicle)
        }
      });
  }


}
