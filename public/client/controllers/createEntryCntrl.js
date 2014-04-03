clevernote
.controller('createEntryCntrl', ['$scope', '$http', 'CryptoService', 'LoginService', function($scope, $http, CryptoService, LoginService) {
    $scope.noteDate = null;
    $scope.noteTitle = "";
    $scope.noteEntry = "";
    $scope.tagArray = [];
    var passkey = $scope.saltedPasskey;
    console.log(passkey);    
  $scope.postEntry = function() {
    var noteData = {};
    
    noteData["title"]= $scope.noteTitle;
    //noteData["Tags"] = $scope.tagArray;
    noteData["body"] = $scope.noteEntry;
        
    var data = CryptoService.hashBlob(JSON.stringify(noteData));
    console.log(data);
    data = CryptoService.encryptHash(data,passkey);
    console.log(data);
    
    $http({
      url: '/notes/new',
      method: "POST",
      data: data.ciphertext
    })
    .success(function(){
      alert('Saved the entry');
    });
  };


  $scope.clearEntry = function() {
    $scope.noteDate = null;
    $scope.noteTitle = "";
    $scope.noteEntry = "";
    $scope.tagArray.length = 0;
  };

  $scope.addTag = function() {
    $scope.tagArray.push($scope.enteredTag);
    $scope.enteredTag = "";
  };

}]);
