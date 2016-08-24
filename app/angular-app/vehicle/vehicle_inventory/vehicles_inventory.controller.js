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
              console.log("DEBUG => data --> " + vehicles);
            $scope.vehicles = vehicles;
            $scope.loading=false;


        }
      });
    }

get_vehicles();

}
