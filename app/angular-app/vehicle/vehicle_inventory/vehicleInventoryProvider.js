(function () {

    function vehicleInventoryProvider ($http) {


    this.getVehicleByOwnerID = function (callback){

      var ownerGuid = "617a69c3-bd34-445c-a762-1bbcf228f7bb"

        var vehicleListData = JSON.stringify({
          'submitter': "submitter",
          'ownerGuid': ownerGuid,
          'activity': 'getbyowner'
        })


        $http({
			    url: 'http://api.nationsauction.com/inventory/Vehicle/GetByOwner',
			    method: "POST",
			    data: vehicleListData,
			    headers: {'Content-Type': 'application/json'}
  			})
          .success(function (data, status, headers, config) {
    				console.log("DEBUG => data > " + data);
    				var testData = JSON.parse(data);

    				console.log("DEBUG => testData raw > " + testData);
    				console.log("DEBUG => testData > " + JSON.stringify(testData));
    			    callback(null, testData);
    			})
          .error(function (data, status, headers, config) {
    			    callback(data);
    			});
  		};

    }

    naBaseApp.service("vehicleInventoryProvider", [ "$http", vehicleInventoryProvider]);

})();
