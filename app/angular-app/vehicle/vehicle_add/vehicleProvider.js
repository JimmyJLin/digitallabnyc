(function () {

    function vehicleProvider ($http) {

      this.addVehicle = function(addVehicleData){
        console.log(addVehicleData)
        $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
          })
          .catch(function(error){
            console.log("Unable to Add vehicle, error: ", error)
          })

      }



    }

    naBaseApp.service("vehicleProvider", [ "$http", vehicleProvider]);

})();
