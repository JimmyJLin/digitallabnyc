angular.module('naBaseApp').controller('VehiclesAddController', VehiclesAddController);

function VehiclesAddController($scope, vehicleProvider){
  var vm = this;

  vm.addVehicle = function(){
    var owner = "5de6dd75-2957-407d-b024-216ab34cfc68"

      var addVehicleData = JSON.stringify({
        'submitter': "submitter",
        'vin': vm.vin,
        'year': vm.year,
        'make': vm.make,
        'model': vm.model,
        'type': vm.type,
        'description': vm.description,
        'price': vm.price,
        'owner': owner,
        'activity': 'add'
      })


  vehicleProvider.addVehicle(addVehicleData);

      }
}
