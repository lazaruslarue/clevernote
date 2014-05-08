clevernote
.service('LoginService', [function(){
  return {
    verify: function (passkey, cryptoService) {
      saltedPasskey = cryptoService.returnSaltedPasskey(passkey);
      return saltedPasskey
    }
  }
}]);
