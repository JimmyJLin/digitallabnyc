angular.module('naBaseApp').factory('vehicleFactory',function(){
  return {
    vehicleAllProvider : vehicleAllProvider
  }
})

//// this is for adding vehicle.
// function vehicleProvider ($http, $location) {
//
//   this.addVehicle = function(addVehicleData){
//     console.log("Vehicle_add/vehicleProvider lin 6", addVehicleData)
//     // $scope.loading=true;
//     $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
//       .then(function(response){
//         console.log('this is the response', response)
//         // $scope.loading=false;
//
//         if (response.status === 200 && JSON.parse(response.data).status === "FAIL") {
//           return false
//           $location.path("/index")
//
//         } else {
//         }
//
//       })
//       .catch(function(error){
//         console.log("Unable to Add vehicle, error: ", error)
//     })
//   }
// }

//
// // this is for add vehicle by vin number
// function addbyVinProvider ($http, $location) {
//
//
//     this.getvehiclebyVin = function(vin, callback) {
//
//       var getbyVinData = JSON.stringify({
//         'submitter': "submitter",
//         'vin': vin
//       })
//
//       $http({
//         url: 'http://api.nationsauction.com/inventory/APIInventory/GetVehicleAggregateDetailByVIN',
//         method: "POST",
//         cache: 'false',
//         data: getbyVinData,
//         headers: {'Content-Type': 'application/json'}
//       })
//         .success(function (data, status, headers, config) {
//           var vehicledata = JSON.parse(data)
//             callback(null,vehicledata)
//         })
//         .error(function (data, status, headers, config) {
//
//             callback(status);
//
//         });
//     };
//
//     this.addVehicle = function(addVehicleData){
//       console.log("Provider Line 30", addVehicleData)
//
//       $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
//         .then(function(response){
//           console.log('this is the response', response)
//
//           if (response.status === 200 && JSON.parse(response.data).status === "FAIL") {
//             return false
//             $location.path("/index")
//
//           } else {
//           }
//
//         })
//         .catch(function(error){
//           console.log("Unable to Add vehicle, error: ", error)
//         })
//     }
//   }
//
//
  function vehicleAllProvider($http) {


  this.getAllVehicle = function (callback){

      var vehicleListData = JSON.stringify({
        'submitter': "test",
        'activity': 'getall'
      })


      $http({
        url: 'http://api.nationsauction.com/inventory/Vehicle/GetAll',
        method: "POST",
        cache: 'false',
        data: vehicleListData,
        headers: {'Content-Type': 'application/json'}
      })
        .success(function (data, status, headers, config) {
          // console.log("DEBUG => data > " + data);
          var testData = JSON.parse(data);

          // console.log("DEBUG => testData raw > " + testData);
          // console.log("DEBUG => testData > " + JSON.stringify(testData));
            callback(null, testData);
        })
        .error(function (data, status, headers, config) {
            callback(data);
        });
    };

  }
//
//   function addConditionProvider ($http, $location) {
//
//     this.addConditionData = function(conditionData){
//       console.log('passed conditionDatadata', conditionData)
//
//       $http.post('http://api.nationsauction.com/inventory/Vehicle/CRAdd', conditionData)
//         .then(function(response){
//           // console.log("Condition posted!", response)
//
//           if (response.status === 200 && JSON.parse(response.data).status === "SUCCESS") {
//             // return response.data
//             console.log("Condition Report Posted!", response)
//
//             $location.path("/index")
//           } else {
//             console.log("Conditioning Report NOT posted!!!", error)
//           }
//
//         })
//         .catch(function(error){
//           console.log("Unable to Add condition, error: ", error)
//         })
//
//     }
//
//     this.addDamageData = function(damageData){
//       console.log('passed DamageData', damageData)
//
//       $http.post('http://api.nationsauction.com/inventory/Vehicle/DamageAdd', damageData)
//         .then(function(response){
//           console.log("interiorDamageData & exteriorDamageData Posted!", response)
//           // $scope.loading=false;
//
//         })
//         .catch(function(error){
//           console.log("unable to add interior & exterior damage", error)
//         })
//
//     }
//
//
//
//   }
//
//   function vehicleDetailsProvider ($http) {
//
//
//   this.vehicleDisplay = function (vehicleGuid, callback){
//
//     ;  // vehicle ID
//
//       var singleVehicle = JSON.stringify({
//         'submitter': "submitter",
//         'guid': vehicleGuid,
//         'activity': 'getbyid'
//       })
//
//
//       $http({
//         url: 'http://api.nationsauction.com/inventory/Vehicle/GetByID',
//         method: "POST",
//         cache: 'false',
//         data: singleVehicle,
//         headers: {'Content-Type': 'application/json'}
//       })
//         .success(function (data, status, headers, config) {
//           console.log('SUCCESS FROM THE PROVIDER',  data);
//
//           var vehicle = JSON.parse(data);
//
//           callback(null, data);
//         })
//         .error(function (data, status, headers, config) {
//             callback(data);
//         });
//     };
//
//
//   }
