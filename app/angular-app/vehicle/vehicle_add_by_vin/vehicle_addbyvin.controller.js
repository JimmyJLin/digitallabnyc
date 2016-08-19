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
            vm.vin = $scope.vehicle.VIN;
            vm.make = $scope.vehicle.VehicleMake;
            vm.year = JSON.parse($scope.vehicle.DataBasic).year;
            vm.model = JSON.parse($scope.vehicle.DataBasic).model.name;
            vm.trim = JSON.parse($scope.vehicle.DataBasic).trim.name;
            vm.bodystyle = JSON.parse($scope.vehicle.DataBasic).vehicleStyle;
            vm.vehicleType =JSON.parse($scope.vehicle.DataBasic).vehicleType;
            vm.itemNo = $scope.vehicle.ItemGuid;
            vm.addedsDate = $scope.vehicle.DateCreated;
            vm.engine = JSON.parse($scope.vehicle.DataSquishDetail).engine;

            console.log( vm.vin , $scope.vehicle);

        }
      });
  }

  vm.addVehicle = function(){
    var vehicleAdd = {
      VIN: vm.vin,
      Year:vm.year,
      Make:vm.make,
      Model:vm.model,
      Trim:vm.trim,
      bodystyle:vm.bodystyle,
      vehicleType:vm.vehicleType,
      itemNo:vm.itemNo,
      mileage:vm.mileage,
      location:vm.location,
      inventoryStatus:vm.inventoryStatus,
      date:vm.date,
      description: vm.description,
      exteriorColor: vm.exterior_color,
      interiorColor: vm.interior_color,
      searchColor: vm.search_color,
      seat:vm.seat,
      door:vm.door,
      engine:vm.engine,
      transmission:vm.transmission,
      drivetrain:vm.drivetrain,
      fuel:vm.fuel,
      brakes:vm.brakes,
      titleStatus:vm.titleStatus,
      titleState:vm.titleState,
      warranty:vm.warranty,
      drivetrainWarranty: vm.drivetrainWarranty,
      additionalWarranty: vm.additionalWarranty,
      certifiedPreOwned:vm.certifiedPreOwned,
      guaranteedFinancing: vm.guaranteedFinancing,
      sellerGuarantee : vm.sellerGuarantee,
      yellowLight : vm.yellowLigh,
      interiorOptions : vm.interirOptions,
      exteriorOptions : vm.exteriorOptions,
      premiumOptions: vm.premiumOptions,
      truckOptions: vm.truckOptions
    };
    console.log(vehicleAdd)
  }


}
