clevernote
.factory('CryptoService',  ['$rootScope', function( $rootScope ) {
  var _c = CryptoJS;
  console.log(_c)

  // this is only necessary until we have a login page.
  var salt = CryptoJS.enc.Latin1.parse('Hello, World!');
      var options = {
        keySize: 512/32,
        iterations: 10 //this could be bigger :)
      };

  return {
    passkey: function() {
      return CryptoJS.PBKDF2('secretPassphrase', salt, options);
    },
    hashBlob: function (blob) {
      var hash = CryptoJS.SHA3(blob, { outputLength: 512 });
      return hash;
    },
    // encryptHash: function (hash, key) {
    //   console.log('encryptHash: ', hash, 'key: ', key);
    //   console.log( _c)
    //   var encrypted = _c.encrypt(hash, key);
    //   console.log('encrypted: ', encrypted);
    //   return encrypted;
    // },
    encryptJSON: function (json, key) {
      console.log('encryptjson: ', json, 'key: ', key);
      console.log( _c, json, key)
      var encrypted = _c.enc.Latin1.parse(json, key);
      console.log('encrypted: ', encrypted);
      return encrypted;
    },
    decryptHash: function (hash, key) {
      console.log(hash, key);
      var decrypted = _c.enc.Latin1.stringify(hash, key);
      console.log(decrypted);
      return decrypted.toString(CryptoJS.enc.Latin1);
    },
    returnSaltedPasskey: function (secretPassphrase) {
      // TODO: later, we'll use a randomized QR for the salt
      var salt = CryptoJS.enc.Latin1.parse('Hello, World!');
      var options = {
        keySize: 512/32,
        iterations: 10 //this could be bigger :)
      };
      var key = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
      var key512Bits1000Iterations = CryptoJS.PBKDF2('secretPassphrase', salt, options);
      return key;
    }
  };
}]);



