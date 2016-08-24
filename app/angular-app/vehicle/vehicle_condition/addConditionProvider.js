(function () {

    function addConditionProvider ($http) {

      this.addConditionData = function(data){
        console.log('passed data', data)

        $http.post('http://api.nationsauction.com/inventory/Vehicle/CRAdd', data)
          .then(function(response){
            console.log("Condition posted!", response)
            $scope.loading=false;

          })
          .catch(function(error){
            console.log("Unable to Add condition, error: ", error)
          })

      }


    }

    naBaseApp.service("addConditionProvider", [ "$http", addConditionProvider]);

})();
