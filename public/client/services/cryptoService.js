angular.module('Clevernote', [])
.service('CryptoService', function() {
  return {
    hashBlob: function (blob, salt) {
      var hash = CryptoJS.SHA3(blob, { outputLength: 512 });
      return hash;
    },
    encryptHash: function (hash, key) {
      var encrypted = _c.encrypt(hash, key);
      return encrypted.toString(CryptoJS.enc.Latin1);
    },
    decryptHash: function (hash, key) {
      var decrypted = _c.decrypt(encrypted, passkey);
      return decrypted.toString(CryptoJS.enc.Latin1);
    },
    returnSaltedPasskey: function (secretPassphrase) {
      // later, we'll use a randomized QR for the salt
      var salt = CryptoJS.enc.Latin1.parse('Hello, World!');
      var options = { 
        keySize: 512/32, 
        iterations: 1000 
      };
      var key512Bits1000Iterations = CryptoJS.PBKDF2(secretPassphrase, salt, options);
      return key512Bits1000Iterations;
    }
  };  
});