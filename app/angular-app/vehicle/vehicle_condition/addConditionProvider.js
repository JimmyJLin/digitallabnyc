(function () {

    function addConditionProvider ($http) {

      this.addConditionData = function(conditionData){
        console.log('passed conditionDatadata', conditionData)

        $http.post('http://api.nationsauction.com/inventory/Vehicle/CRAdd', conditionData)
          .then(function(response){
            // console.log("Condition posted!", response)

            if (response.status === 200 && JSON.parse(response.data).status === "SUCCESS") {
              // return response.data
              console.log("Condition Report Posted!", response)
            } else {
              console.log("Conditioning Report NOT posted!!!", error)
            }

          })
          .catch(function(error){
            console.log("Unable to Add condition, error: ", error)
          })

      }

      this.addDamageData = function(interiorDamageData, exteriorDamageData){
        console.log('passed interiorDamageData', interiorDamageData)
        console.log('passed exteriorDamageData', exteriorDamageData)

        $http.post('http://api.nationsauction.com/inventory/Vehicle/DamageAdd', interiorDamageData, exteriorDamageData)
          .then(function(response){
            console.log("interiorDamageData & exteriorDamageData Posted!", response)
          })
          .catch(function(error){
            console.log("unable to add interior & exterior damage", error)
          })

      }



    }

    naBaseApp.service("addConditionProvider", [ "$http", addConditionProvider]);

})();
