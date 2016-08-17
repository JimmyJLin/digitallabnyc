angular.module('naBaseApp').controller('DealerSigninController', DealerSigninController)


  function DealerSigninController ($http, $location, $window, AuthFactory) {
    var vm = this;

    vm.isSignedIn =  function(){
      if(AuthFactory.isSignedIn){
        return true;
      } else {
        return false;
      }
    }

    vm.signin =function(){
       if (vm.email && vm.password) {
         var user = {
           submitter: 'submitter',
           username:vm.email,
           password:vm.password,
           activity: 'auth'
         };

        $http.post('http://api.nationsauction.com/auth/User/Authenticate', user).then(function(response){
          if(response.status === 200){
            $window.sessionStorage.token = response.data.token;
            $window.localStorage.setItem('userId', JSON.parse(response.data).message);
            AuthFactory.isSignedIn = true;
            }
            console.log(response, response.status)
          }).catch(function(error){
            console.log(error)
          })

       }
    }


    vm.signout = function(){
      AuthFactory.isSignedIn = false;
      delete $window.sessionStorage.token
      delete $window.localStorage.userId
      // $location.path('/#')
    }




  }
