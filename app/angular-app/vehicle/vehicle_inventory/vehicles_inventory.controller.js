angular.module('naBaseApp').controller('VehiclesInventoryController', VehiclesInventoryController);

function VehiclesInventoryController($scope, vehicleInventoryProvider){

  var vm = this;
  vm.title= "Inventory";

function get_vehicles(){
  $scope.loading=true;

  $scope.vehicles =   vehicleInventoryProvider.getVehicleByOwnerID( function(err, vehicles){
        $scope.finished_loading = true;
        if (err) {
            $scope.page_load_error = err.message;
        } else {
          // console.log("DEBUG => data --> " + vehicles);
          $scope.vehicles = vehicles;
          $scope.loading=false;


        }
      });
    };

    get_vehicles();



  vm.editVehicle =  function(){

      $scope.loading=true;
      $scope.show=false;
      var owner = "617a69c3-bd34-445c-a762-1bbcf228f7bb"

        var editedVehicleData = JSON.stringify({
          'submitter': "submitter",
          'vin': vm.vin,
          'year':vm.year,
          'make':vm.make,
          'model':vm.model,
          'trim':vm.trim,
          'bodyStyle':vm.bodyStyle,
          'bodyType':vm.bodyType,
          'vehicleStyle':vm.vehicleStyle,
          'vehicleType':vm.vehicleType,
          'itemNumber':vm.itemNo,
          'mileage':vm.mileage,
          'location':vm.location, // need to pass in location guid 32 digits + 4 dashes similar to owner
          'inventoryStatus':vm.inventoryStatus,
          'dateAdded':vm.dateAdded,
          'description': vm.description,
          'exteriorColor': vm.exteriorColor,
          'interiorColor': vm.interiorColor,
          'searchColor': vm.searchColor,
          'seatCovering':vm.seatCovering,
          'doorCount':vm.doorCount,
          'engine':{
            'cylinder': vm.cylinder,
            'size': vm.size,
            'configuration': vm.configuration,
          },
          'transmission':vm.transmission,
          'drivetrain':vm.drivetrain,
          'fuelType':vm.fuelType,
          'brakes':vm.brakes,
          'titleStatus':vm.titleStatus,
          'titleState':vm.titleState,
          'fullWarranty':vm.fullWarranty,
          'drivetrainWarranty': vm.drivetrainWarranty,
          'additionalWarranty': vm.additionalWarranty,
          'certifiedPreOwned':vm.certifiedPreOwned,
          'guaranteedFinancing': vm.guaranteedFinancing,
          'interiorOptions' : vm.interiorOptions,
          'exteriorOptions' : vm.exteriorOptions,
          'premiumOptions': vm.premiumOptions,
          'truckOptions': vm.truckOptions,
          'customOptions': vm.customOptions,
          'owner': owner,
          'activity': 'update'
        })

        console.log('this is the new vehicle', editedVehicleData)
        // vehicleInventoryProvider.editVehicle(editedVehicleData);

    }

    vm.addVehiclePricing = function(){
      // var vin = "1GNEK13Z34J221437"

      var vehiclePricingData = JSON.stringify({
        'submitter': "submitter",
        'vin': vm.vehicleVin,
        'vehicleCost': vm.vehicleCost,
        'vehiclePurchaseDate': vm.purchaseDate,
        'activity': 'add'

      })
      console.log("Vehicle Pricing Data Hello", vehiclePricingData)
      // vehicleInventoryProvider.addVehiclePricing(vehiclePricingData)
    }



}
