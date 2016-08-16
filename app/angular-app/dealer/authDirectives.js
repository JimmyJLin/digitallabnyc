angular.module('naBaseApp').directive('validateEmail', function() {

  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and Angular has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
        ctrl.$validators.email = function(modelValue) {

          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});


    angular.module('naBaseApp').directive('validatePassword', function() {

      var PASS_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/;

      return {
        require: 'ngModel',
        restrict: '',
        link: function(scope, elm, attrs, ctrl) {
              // only apply the validator if ngModel is present and Angular has added the password validator
              if (ctrl && ctrl.$validators.password) {
                // this will overwrite the default Angular password validator
                ctrl.$validators.password = function(modelValue) {
                  return ctrl.$isEmpty(modelValue) || PASS_REGEXP.test(modelValue);
                  }
                }
          }
        }
    });
