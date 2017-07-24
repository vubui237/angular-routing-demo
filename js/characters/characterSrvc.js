angular.module('routing').service('characterSrvc', function($http, $q) {
    this.getCharacters = function() {
			var deferred = $q.defer();
			$http.get('http://swapi.co/api/people/').then(function(result) {
				for(var i = 0; i < result.data.results.length; i++) {
					var char = result.data.results[i];
					var split = char.url.split('/');
					var characterId = split[split.length-2];
					char.id = characterId;
				}
				deferred.resolve(result.data.results);
			});
			return deferred.promise;
	};
});
