angular.module('routing').config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/'); //If they try to access a page that doesn't exist, take them back to the main page.

$stateProvider
    .state('home',{
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'homeCtrl'
    })
    .state('characters', {
        url: '/characters',
        templateUrl: '../views/characters.html',
        controller: 'characterCtrl',
        resolve: { //This pulls data to be loaded prior to the actual page being loaded. In this case loading characters.
            characters: function(characterSrvc) {
                return characterSrvc.getCharacters().then(function(response) {
                    return response;
                })
            }
        }
    })
    .state('details', {
        url: '/character/:characterId', //This is a state parameter, it's looking for a value. I.E. userName, but in this case characterId, is what will be displayed based on who it is or what char id they clicked on.
        templateUrl: '../views/details.html',
        controller: 'detailsCtrl'
    })


});
