(function () {

    function vehicleDetailsProvider ($http) {
    //
    //
    // this.vehicleDisplay = function (vehicleGuid, callback){
    //
    //   var vehicleGuid = "617a69c3-bd34-445c-a762-1bbcf228f7bb";  // vehicle ID
    //
    //     var singleVehicle = JSON.stringify({
    //       'submitter': "test",
    //       'vehicleGuid': vehicleGuid
    //       'activity': 'getbyid'
    //     })
    //
    //
    //     $http({
    //       url: 'http://api.nationsauction.com/Vehicle/GetByID',
    //       method: "POST",
    //       cache: 'false',
    //       data: singleVehicle,
    //       headers: {'Content-Type': 'application/json'}
    //     })
    //       .success(function (data, status, headers, config) {
    //         console.log(data);
    //
    //         var vehicle = JSON.parse(data);
    //
    //         callback(null, vehicle);
    //       })
    //       .error(function (data, status, headers, config) {
    //           callback(data);
    //       });
  	// 	};



    }

    naBaseApp.service("vehicleDetailsProvider", [ "$http", vehicleDetailsProvider]);

})();
