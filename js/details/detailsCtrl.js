angular.module('routing').controller('detailsCtrl', function($scope, $stateParams, detailsSrvc) {
    $scope.getChar = function(charId) {
        detailSrvc.getChar(charId).then(function(response) {
            $scope.char = response;
        });
    }
});
