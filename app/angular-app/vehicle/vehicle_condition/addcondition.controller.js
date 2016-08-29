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

  $scope.exteriorDamageReports = []
  $scope.interiorDamageReports = []

  vm.addExteriorDamageData = function(){

    var exteriorDamage = {
      'location': vm.exteriorDamageLocation,
      'damageType': vm.exteriorDamageType,
      'severity': vm.exteriorDamageSeverity,
      'estimatedRepairCost': vm.estimatedExteriorRepairCost,
      'description': vm.exteriorDamageComment
    }
    $scope.exteriorDamageReports.push(exteriorDamage)
    console.log("exteior Damage", exteriorDamage)

    $scope.exteriorDamageReset()

  }

  $scope.exteriorDamageReset = function(){
    vm.exteriorDamageLocation = null;
    vm.exteriorDamageType = null;
    vm.exteriorDamageSeverity = null;
    vm.estimatedExteriorRepairCost = null;
    vm.exteriorDamageComment = null;

  }


  vm.addInteriorDamageData = function(){

    var interiorDamage = {
      'location': vm.interiorDamageLocation,
      'damageType': vm.interiorDamageType,
      'severity': vm.interiorDamageSeverity,
      'estimatedRepairCost': vm.estimatedInteriorRepairCost,
      'description': vm.interiorDamageComment
    }
    $scope.interiorDamageReports.push(interiorDamage)
    console.log("interior Damage", interiorDamage)

    $scope.interiorDamageReset()
  }

  $scope.interiorDamageReset = function(){
    vm.interiorDamageLocation = null;
    vm.interiorDamageType = null;
    vm.interiorDamageSeverity = null;
    vm.estimatedInteriorRepairCost = null;
    vm.interiorDamageComment = null;
  }


  vm.addCond = function(){

    var interiorDamageData = JSON.stringify({
      'submitter': "submitter",
      'crGuid': vm.vin,
      'intExt': "int",
      'interiorDamages': $scope.interiorDamageReports,
      'activity': "cradd"
    })

    var exteriorDamageData = JSON.stringify({
      'submitter': "submitter",
      'crGuid': vm.vin,
      'intExt': "ext",
      'exteriorDamages': $scope.exteriorDamageReports,
      'activity': "cradd"
    })

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
      // 'exteriorDamages': $scope.exteriorDamageReports,
      // 'interiorDamages': $scope.interiorDamageReports,
      // 'exteriorDamageLocation': vm.exteriorDamageLocation,
      // 'exteriorDamageType': vm.exteriorDamageType,
      // 'exteriorDamageSeverity': vm.exteriorDamageSeverity,
      // 'estimatedExteriorRepairCost': vm.estimatedExteriorRepairCost,
      // 'exteriorDamageComment': vm.exteriorDamageComment,
      // 'interiorDamageLocation': vm.interiorDamageLocation,
      // 'interiorDamageType': vm.interiorDamageType,
      // 'interiorDamageSeverity': vm.interiorDamageSeverity,
      // 'estimatedInteriorRepairCost': vm.estimatedInteriorRepairCost,
      // 'interiorDamageComment': vm.interiorDamageComment,
      'activity': 'add'
    })
    console.log(conditionData)
    // alert('clicked')
    addConditionProvider.addConditionData(conditionData)
    addConditionProvider.addDamageData(interiorDamageData, exteriorDamageData)
  }

}

//
// {
//    "submitter":"submitter",
//    "owner":"617a69c3-bd34-445c-a762-1bbcf228f7bb",
//    "vin":"1GNEK13Z34J221437",
//    "grade":"4",
//    "recondition":"2",
//    "detail":"2",
//    "frameDamage":"2",
//    "previouslyRepainted":"2",
//    "dashLightOptions":[
//       "Hydraulic Lift",
//       "Hard Tonneau Cover"
//    ],
//    "damage":"2",
//    "vehicleDrive":"2",
//    "transmission":"Makes Noise",
//    "exhaust":"No Damage",
//    "ac":"No A/C",
//    "battery":"Weak",
//    "oilChanged":"2",
//    "fuelLevel":"1/2",
//    "tireMatch":"2",
//    "weatherChecked":"1",
//    "leftFront":"4/32 to 7/32",
//    "rightFront":"4/32 to 7/32",
//    "leftRear":"4/32 to 7/32",
//    "rightRear":"Missing",
//    "spare":"New",
//    "jack":"1",
//    "master":"5",
//    "remote":"2",
//    "valet":"3",
//    "combo":"4",
//    "keylessGo":"No",
//    "windshield":"Chipped",
//    "ownersManual":"Not Present",
//    "odor":"Smoke",
//    "floorMats":"2",
//    "exteriorDamages":[
//       {
//          "exteriorDamageLocation":"Right Mirror",
//          "exteriorDamageType":"Creased",
//          "exteriorDamageSeverity":"Less than 1",
//          "estimatedExteriorRepairCost":333,
//          "exteriorDamageComment":"333",
//          "$$hashKey":"object:173"
//       },
//       {
//          "exteriorDamageLocation":"Front Bumper",
//          "exteriorDamageType":"Faded",
//          "exteriorDamageSeverity":"Greater than 24",
//          "estimatedExteriorRepairCost":6666,
//          "exteriorDamageComment":"6666",
//          "$$hashKey":"object:175"
//       }
//    ],
//    "interiorDamages":[
//       {
//          "interiorDamageLocation":"Glovebox",
//          "interiorDamageType":"Faded",
//          "interiorDamageSeverity":"1-2",
//          "estimatedInteriorRepairCost":1111,
//          "interiorDamageComment":"1111",
//          "$$hashKey":"object:177"
//       },
//       {
//          "interiorDamageLocation":"Dash",
//          "interiorDamageType":"Hairline Scratch",
//          "interiorDamageSeverity":"6-10",
//          "estimatedInteriorRepairCost":4444,
//          "interiorDamageComment":"4444",
//          "$$hashKey":"object:179"
//       }
//    ],
//    "activity":"add"
// }



// {
//    "submitter":"submitter",
//    "crGuid":"911f3413-0e9d-402d-b651-380c8c4d2e9e",
//    "intExt":"int",
//    "interiorDamages":[
//       {
//          "location":"Steering Wheel",
//          "damageType":"Chipped",
//          "severity":"10-16",
//          "estimatedRepairCost":5677,
//          "description":"7777",
//       },
//       {
//          "location":"Console",
//          "damageType":"Creased",
//          "severity":"6-10",
//          "estimatedRepairCost":5555,
//          "description":"5555",
//       }
//    ],
//    "activity":"cradd"
// }
//
// {
//    "submitter":"submitter",
//    "crGuid":"911f3413-0e9d-402d-b651-380c8c4d2e9e",
//    "intExt":"ext",
//    "exteriorDamages":[
//       {
//          "location":"Head Light",
//          "damageType":"Broken",
//          "severity":"Less than 1",
//          "estimatedRepairCost":12345,
//          "description":"12346",
//       },
//       {
//          "location":"Windshield",
//          "damageType":"Chipped",
//          "severity":"4-6",
//          "estimatedRepairCost":5678,
//          "description":"56798",
//       }
//    ],
//    "activity":"cradd"
// }
