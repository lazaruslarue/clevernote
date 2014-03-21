clevernote
.controller('createEntryCntrl', ['$scope', '$http', 'CryptoService', function($scope, $http, CryptoService) {
    $scope.noteDate = null;
    $scope.noteTitle = "";
    $scope.noteEntry = "";
    $scope.tagArray = [];
    
  $scope.postEntry = function() {
    var noteData = {};
    
    noteData["title"]= $scope.noteTitle;
    //noteData["Tags"] = $scope.tagArray;
    noteData["body"] = $scope.noteEntry;
        
    var data = CryptoService.hashBlob(JSON.stringify(noteData));
    console.log(data);
    data = CryptoService.encryptHash(data,$scope.passkey.toString());
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
