angular.module('routing').service('characterSrvc', function($http) {
    this.getCharacters = function() {
		return $http.get('http://swapi.co/api/people/');
	};
});
