clevernote
.factory('CryptoService',  ['$rootScope', function( $rootScope ) {
  var _c = CryptoJS.AES;
  
  // this is only necessary until we have a login page.
  var salt = CryptoJS.enc.Latin1.parse('Hello, World!');
      var options = { 
        keySize: 512/32, 
        iterations: 10 //this could be bigger :) 
      };
  $rootScope.passkey = CryptoJS.PBKDF2('secretPassphrase', salt, options);  
  
  return {
    hashBlob: function (blob) {
      var hash = CryptoJS.SHA3(blob, { outputLength: 512 });
      return hash;
    },
    encryptHash: function (hash, key) {
      console.log('encryptHash: ', hash, 'key: ', key);
      var encrypted = _c.encrypt(hash, key);
      console.log('encrypted: ', encrypted);
      return encrypted;
    },
    decryptHash: function (hash, key) {
      console.log(hash, key);
      var decrypted = _c.decrypt("["+hash.toString()+"]", key);
      console.log(decrypted);
      return decrypted.toString(CryptoJS.enc.Latin1);
    },
    returnSaltedPasskey: function (secretPassphrase) {
      // later, we'll use a randomized QR for the salt
      var salt = CryptoJS.enc.Latin1.parse('Hello, World!');
      var options = { 
        keySize: 512/32, 
        iterations: 10 //this could be bigger :) 
      };
      var key512Bits1000Iterations = CryptoJS.PBKDF2(secretPassphrase, salt, options);
      return key512Bits1000Iterations;
    }
  };  
}]);



