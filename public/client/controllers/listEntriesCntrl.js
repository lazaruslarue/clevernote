clevernote
.controller('listEntriesCntrl', ['$scope', '$http', '$state', '$rootScope', 'CryptoService',
    function($scope, $http, $state, $rootScope, CryptoService) {
      console.log($scope.passkey)
    $http({
      method:'GET',
      url: '/notes/list'
    })
    .success(function(data){
      console.log('data & passkey',data,  $scope.passkey);
      // function decrypteach (blob) {
      //   for (var i in blob) {
      //     console.log('test: ',CryptoService.decryptHash(blob[i], $scope.passkey));
      //   }
      // }
      decrypteach(data);
      $scope.listEntries = data;
    });

    $scope.alertEve = function(index) {
      var temp = $scope.listEntries[index];
      $rootScope.tempObj = temp;
      $state.go('displayEntry');
    };
    function decrypteach (blob) {
      console.log('hi: ',blob);
      for (var i in blob) {
        console.log(CryptoService.decryptHash(blob[i].words, $scope.passkey));
      }
    }
  }
]);

