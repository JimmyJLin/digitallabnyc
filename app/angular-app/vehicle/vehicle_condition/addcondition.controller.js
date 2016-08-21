angular.module('naBaseApp').controller('AddConditionController', AddConditionController);

function AddConditionController($scope, addConditionProvider){

  var vm = this;

  // Truck Option Checkbox
  $scope.dashLightOptions = [
    'Bed Liner',
    'Custom Bed',
    'Custom Bumper',
    'Dual Rear Wheels',
    'Dump Bed',
    'Front Tow Hooks',
    'Grille Guard',
    'Hard Tonneau Cover',
    'Hydraulic Lift',
    'Lifted'
  ];
  $scope.dashLightOption = {
    options: ['dashLightOption']
  };

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
