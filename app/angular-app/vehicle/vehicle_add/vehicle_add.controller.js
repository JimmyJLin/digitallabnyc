angular.module('naBaseApp').controller('VehiclesAddController', VehiclesAddController);

function VehiclesAddController($scope, vehicleProvider){
  var vm = this;

  vm.addVehicle = function(){
    var owner = "617a69c3-bd34-445c-a762-1bbcf228f7bb"

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
