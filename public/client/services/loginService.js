clevernote
.service('LoginService', ['$scope', 'CryptoService', function($scope, CryptoService){
  // here's the problem, but how do we solve it? 
  $scope.verify = function () {
    var passkey = $scope.passkey;
    $scope.saltedPasskey = CryptoService.returnSaltedPasskey(passkey);
  };
}]);