angular.module('naBaseApp').controller('AddConditionController', AddConditionController);

function AddConditionController($scope, addConditionProvider){

  var vm = this;
  vm.VIN_REGEXP = /^[a-zA-Z0-9](\w{9}(\w{7})?)?$/;

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
    'vin': vm.vin,
    'grade': vm.grade,
    'recondition': vm.recondition,
    'detail': vm.detail,
    'frameDamage': vm.frameDamage,
    'previouslyRepainted': vm.previouslyRepainted,
    'dashLightOptions': vm.dashLightOptions,
    'damage': vm.damage,
    'vehicleDrive': vm.vehicleDrive,
    'transmission': vm.transmission,
    'exhaust': vm.exhaust,
    'ac': vm.ac,
    'battery': vm.battery,
    'oilChanged': vm.oilChanged,
    'fuelLevel': vm.fuelLevel,
    'tireMatch': vm.tireMatch,
    'weatherChecked': vm.weatherChecked,
    'leftFront': vm.leftFront,
    'rightFront': vm.rightFront,
    'leftRear': vm.leftRear,
    'rightRear': vm.rightRear,
    'spare': vm.spare,
    'jack': vm.jack,
    'master': vm.master,
    'remote': vm.remote,
    'valet': vm.valet,
    'combo': vm.combo,
    'keylessGo': vm.keylessGo,
    'windshield': vm.windshield,
    'ownersManual': vm.ownersManual,
    'odor': vm.odor,
    'floorMats': vm.floorMats,
    'exteriorDamageLocation': vm.exteriorDamageLocation,
    'exteriorDamageType': vm.exteriorDamageType,
    'exteriorDamageSeverity': vm.exteriorDamageSeverity,
    'estimatedExteriorRepairCost': vm.estimatedExteriorRepairCost,
    'exteriorDamageComment': vm.exteriorDamageComment,
    'interiorDamageLocation': vm.interiorDamageLocation,
    'interiorDamageType': vm.interiorDamageType,
    'interiorDamageSeverity': vm.interiorDamageSeverity,
    'estimatedInteriorRepairCost': vm.estimatedInteriorRepairCost,
    'interiorDamageComment': vm.interiorDamageComment,
    'activity': 'add'
  })
    console.log(conditionData)
    // alert('clicked')
    addConditionProvider.addConditionData(conditionData)

  }

}
