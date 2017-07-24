angular.module('routing').controller('detailsCtrl', function($scope, $stateParams, detailsSrvc) { //stateparamas pulls from the routing, where we can get character.id from characters.html.
    $scope.getChar = function(charId) {
        detailsSrvc.getChar(charId).then(function(response) {
            $scope.character = response;
        });
    }
    $scope.getChar($stateParams.characterId);
});
