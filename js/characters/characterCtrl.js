angular.module('routing').controller('characterCtrl', function($scope, characterSrvc, characters) {
    $scope.characters = characters;
});
