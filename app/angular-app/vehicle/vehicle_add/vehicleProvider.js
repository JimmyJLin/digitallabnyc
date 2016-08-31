(function () {

    function vehicleProvider ($http, $location) {

      this.addVehicle = function(addVehicleData){
        console.log("Vehicle_add/vehicleProvider lin 6", addVehicleData)
        // $scope.loading=true;
        $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
            // $scope.loading=false;

            if (response.status === 200 && JSON.parse(response.data).status === "SUCCESS") {
              return false
              $location.path("/index")

            } else {
            }

          })
          .catch(function(error){
            console.log("Unable to Add vehicle, error: ", error)
          })

      }

      this.addVehicleAndContinue = function(addVehicleData){
        console.log("Vehicle_add/vehicleProvider lin 6", addVehicleData)
        // $scope.loading=true;
        $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
            // $scope.loading=false;

            if (response.status === 200 && JSON.parse(response.data).status === "SUCCESS") {
              return false
              $location.path("/index")

            } else {
            }

          })
          .catch(function(error){
            console.log("Unable to Add vehicle, error: ", error)
          })

      }



    }

    naBaseApp.service("vehicleProvider", [ "$http", "$location", vehicleProvider]);

})();
