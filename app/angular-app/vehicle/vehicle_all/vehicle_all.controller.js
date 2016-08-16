(function () {


function VehiclesAllController($scope, vehicleAllProvider){

  var vm = this;
  vm.title= "All Vehicles";

function get_vehicles_all(){

  $scope.vehicles =   vehicleAllProvider.getAllVehicle( function(err, vehicles){
        $scope.finished_loading = true;
        if (err) {
            $scope.page_load_error = err.message;
        } else {
              console.log("DEBUG => data --> " + vehicles);
            $scope.vehicles = vehicles;
        }
      });
    }

get_vehicles_all();

}
  naBaseApp.controller("VehiclesAllController", ['$scope', 'vehicleAllProvider', VehiclesAllController]);

})();
