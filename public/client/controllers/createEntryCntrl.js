angular.module('CleverNote')
.controller('createEntryCntrl', ['$scope', '$http', 'CryptoService', function($scope, $http, CryptoService) {
    $scope.noteDate = null;
    $scope.noteTitle = "";
    $scope.noteEntry = "";
    $scope.tagArray = [];
    console.log(CryptoService);

  $scope.postEntry = function() {
    var noteData = {};
    console.log('postEntry');
    noteData["title"]= $scope.noteTitle;
    //noteData["Tags"] = $scope.tagArray;
    noteData["body"] = $scope.noteEntry;
    console.log('hashblob: ' , CryptoService.hashBlob(JSON.stringify(noteData)));
    $http({
      url: '/notes/new',
      method: "POST",
      // data: JSON.stringify(noteData)
      data: CryptoService.hashBlob(JSON.stringify(noteData))
    })
    .success(function(){
      alert('Saved the entry')
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
