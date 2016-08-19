(function () {

  function addbyVinProvider ($http) {


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

          });
  		};

    }

  naBaseApp.service("addbyVinProvider", [ "$http", addbyVinProvider]);

})();
