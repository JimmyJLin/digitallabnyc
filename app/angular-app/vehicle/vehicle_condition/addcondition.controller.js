angular.module('naBaseApp').controller('AddConditionController', AddConditionController);

function AddConditionController($scope, addConditionProvider){

  var vm = this;

  vm.addCond = function(){

  var conditionData = JSON.stringify({
    'submitter': "submitter",
    'owner': '617a69c3-bd34-445c-a762-1bbcf228f7bb',
    'condition': vm.condition,
    'vin': vm.vin,
    'activity': 'add'
  })
    console.log($scope.vin)
    alert('clicked')
    addConditionProvider.addConditionData(conditionData)

  }

}
