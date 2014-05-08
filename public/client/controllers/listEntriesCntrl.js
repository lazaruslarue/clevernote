clevernote
.controller('listEntriesCntrl', ['$scope', '$http', '$state', '$rootScope', 'CryptoService',
    function($scope, $http, $state, $rootScope, CryptoService) {
      console.log(CryptoService.saltedPasskey);
    $http({
      method:'GET',
      url: '/notes/list'
    })
    .success(function(data){
      console.log('data & saltedPasskey',data,  CryptoService.saltedPasskey);
      decrypteach(data);
      $scope.listEntries = data;
    });

    $scope.alertEve = function(index) { //this alerts an event, but is unnecessary
      var temp = $scope.listEntries[index];
      $rootScope.tempObj = temp;
      $state.go('displayEntry');
    };
    function decrypteach (blob) {
      console.log('hi: ',blob);
      for (var i in blob) {
        console.log(CryptoService.decryptHash(blob[i], CryptoService.returnSaltedPasskey()));
      }
    }
  }
]);

