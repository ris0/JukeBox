(function () {
    'use strict';

    angular
        .module('app.core')
        .config(stateConfig)
        .run(errorHandler);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    allAlbums.$inject = ['albumFactory'];
    errorHandler.$inject = ['$rootScope', 'logger'];

    function stateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('albums', {
            url: '/albums',
            templateUrl: 'app/core/album/templates/albums.html',
            controller: 'AlbumController',
            controllerAs: 'vm',
            resolve: {
                allAlbums : allAlbums
            }
        })

        $stateProvider.state('album', {
            url: '/albums/:albumId',
            templateUrl: '/js/album/templates/album.html',
            controller: 'AlbumController',
            resolve: {
                theAlbum: function (AlbumFactory, $stateParams) {
                    return AlbumFactory.fetchById($stateParams.albumId);
                }
            }
        });
    }

    function allAlbums (albumFactory) {
        return albumFactory.fetchAll();
    }

    function errorHandler($rootScope, logger) {
        $rootScope.$on('$stateChangeError', function (error, event) {
            if (error) { logger.error('Error while changing states', error); }
            if (event) { logger.error('The event that caused the error', event); }
        })
    }

})();
