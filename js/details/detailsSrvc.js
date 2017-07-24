angular.module('routing').service('detailsSrvc', function($http) {
    this.getChar = function(charId) {
        return $http.get('http://swapi.co/api/people/' + charId).then(function(response) {
            return response.data;
        });
    }
});
