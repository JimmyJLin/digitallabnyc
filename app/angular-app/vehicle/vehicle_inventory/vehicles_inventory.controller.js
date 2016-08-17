angular.module('naBaseApp').controller('VehiclesInventoryController', VehiclesInventoryController);

function VehiclesInventoryController($scope, vehicleInventoryProvider){

  var vm = this;
  vm.title= "Vehicles List";

function get_vehicles(){

  $scope.vehicles =   vehicleInventoryProvider.getVehicleByOwnerID( function(err, vehicles){
        $scope.finished_loading = true;
        if (err) {
            $scope.page_load_error = err.message;
        } else {
              console.log("DEBUG => data --> " + vehicles);
            $scope.vehicles = vehicles;
        }
      });
    }

get_vehicles();

}
