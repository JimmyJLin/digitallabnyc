(function () {

    function vehicleProvider ($scope, $http) {

      this.addVehicle = function(addVehicleData){
        console.log(addVehicleData)
        $scope.loading=true;
        $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
            $scope.loading=false;
          })
          .catch(function(error){
            console.log("Unable to Add vehicle, error: ", error)
          })

      }



    }

    naBaseApp.service("vehicleProvider", [ "$http", vehicleProvider]);

})();
