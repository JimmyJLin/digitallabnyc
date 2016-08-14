(function () {


function VehiclesListController($scope, vehicleListProvider){

  var vm = this;
  vm.title= "Vehicles List";

function get_vehicles(){

  $scope.vehicles =   vehicleListProvider.getVehicleByOwnerID( function(err, vehicles){
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
  naBaseApp.controller("VehiclesListController", ['$scope', 'vehicleListProvider', VehiclesListController]);

})();
