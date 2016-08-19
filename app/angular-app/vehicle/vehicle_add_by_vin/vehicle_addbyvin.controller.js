angular.module('naBaseApp').controller('VehicleAddbyVinController', VehicleAddbyVinController);

function VehicleAddbyVinController($scope, addbyVinProvider){
  var vm = this;
  vm.finalvehicle = {};
  vm.sampleVin = "1GNEK13Z34J221437"

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
            vm.finalvehicle.vehicleType =JSON.parse($scope.vehicle.DataBasic).vehicleType;
            vm.finalvehicle.itemNo = $scope.vehicle.ItemGuid;
            vm.finalvehicle.addedsDate = $scope.vehicle.DateCreated;
            vm.finalvehicle.engine = JSON.parse($scope.vehicle.DataSquishDetail).engine;
            // vm.finalvehicle.engine.availability = JSON.parse($scope.vehicle.DataSquishDetail).engine.availability;
            // vm.finalvehicle.engine.cylinder = JSON.parse($scope.vehicle.DataSquishDetail).engine.cylinder;
            // vm.finalvehicle.engine.compressionRatio = JSON.parse($scope.vehicle.DataSquishDetail).engine.compressionRatio;
            // vm.finalvehicle.engine.size = JSON.parse($scope.vehicle.DataSquishDetail).engine.size;
            // vm.finalvehicle.engine.displacement = JSON.parse($scope.vehicle.DataSquishDetail).engine.displacement;
            // vm.finalvehicle.engine.fuelType = JSON.parse($scope.vehicle.DataSquishDetail).engine.fuelType;
            // vm.finalvehicle.engine.horsepower = JSON.parse($scope.vehicle.DataSquishDetail).engine.horsepower;
            // vm.finalvehicle.engine.torque = JSON.parse($scope.vehicle.DataSquishDetail).engine.torque;
            // vm.finalvehicle.engine.totalValves = JSON.parse($scope.vehicle.DataSquishDetail).engine.totalValves;
            // vm.finalvehicle.engine.manufacturerEgineCode = JSON.parse($scope.vehicle.DataSquishDetail).engine.manufacturerEgineCode;
            // vm.finalvehicle.engine.type = JSON.parse($scope.vehicle.DataSquishDetail).engine.type;
            console.log( vm.finalvehicle.vin , $scope.vehicle);

        }
      });
  }


}
