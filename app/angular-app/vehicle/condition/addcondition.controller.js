(function () {


function AddConditionController($scope, addConditionProvider){

  var vm = this;

  vm.addCond = function(){

  var conditionData = JSON.stringify({
    'submitter': "submitter",
    'owner': '617a69c3-bd34-445c-a762-1bbcf228f7bb',
    'condition': vm.condition,
    'activity': 'add'
  })

    alert('clicked')
    addConditionProvider.addConditionData(conditionData)

  }

}

naBaseApp.controller("AddConditionController", ['$scope', 'addConditionProvider', AddConditionController]);

})();
