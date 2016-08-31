(function () {

    function addConditionProvider ($http, $location) {

      this.addConditionData = function(conditionData, callback){
        // console.log('passed conditionDatadata', conditionData)
        $http({
          url: 'http://api.nationsauction.com/inventory/Vehicle/CRAdd',
            method: "POST",
            cache: 'false',
            data: conditionData,
            headers: {'Content-Type': 'application/json'}
          })
          .success(function (data, status, headers, config) {
            var condD = JSON.parse(data)
              callback(null,condD)
          })
         .error(function (data, status, headers, config) {

             callback(status);

         });

      }

      // $http({
      //   url: 'http://api.nationsauction.com/inventory/APIInventory/GetVehicleAggregateDetailByVIN',
      //   method: "POST",
      //   cache: 'false',
      //   data: getbyVinData,
      //   headers: {'Content-Type': 'application/json'}
      // })
      //   .success(function (data, status, headers, config) {
      //     var vehicledata = JSON.parse(data)
      //       callback(null,vehicledata)
      //   })
      //   .error(function (data, status, headers, config) {
      //
      //       callback(status);
      //
      //   });
      // };





      this.addDamageData = function(damageData){
        console.log('passed DamageData', damageData)

        $http.post('http://api.nationsauction.com/inventory/Vehicle/DamageAdd', damageData)
          .then(function(response){
            console.log("interiorDamageData & exteriorDamageData Posted!", response)
            // $scope.loading=false;

          })
          .catch(function(error){
            console.log("unable to add interior & exterior damage", error)
          })

      }



    }

    naBaseApp.service("addConditionProvider", [ "$http", "$location", addConditionProvider]);

})();
