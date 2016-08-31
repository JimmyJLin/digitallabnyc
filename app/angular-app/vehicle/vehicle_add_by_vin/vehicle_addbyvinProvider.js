(function () {

  function addbyVinProvider ($http, $location) {


      this.getvehiclebyVin = function(vin, callback) {

        var getbyVinData = JSON.stringify({
          'submitter': "submitter",
          'vin': vin
        })

        $http({
          url: 'http://api.nationsauction.com/inventory/APIInventory/GetVehicleAggregateDetailByVIN',
          method: "POST",
          cache: 'false',
          data: getbyVinData,
          headers: {'Content-Type': 'application/json'}
        })
          .success(function (data, status, headers, config) {
            var vehicledata = JSON.parse(data)
              callback(null,vehicledata)
          })
          .error(function (data, status, headers, config) {

              callback(status);

          });
  		};

      this.addVehicle = function(addVehicleData){
        console.log("Provider Line 30", addVehicleData)

        $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
            if (response.status === 200 && JSON.parse(response.data).status === "FAIL") {
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

  naBaseApp.service("addbyVinProvider", [ "$http", "$location", addbyVinProvider]);

})();
